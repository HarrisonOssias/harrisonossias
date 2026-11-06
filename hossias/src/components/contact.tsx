import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/20/solid'
import { SOCIALS } from '../data/resume'
import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './section_label'
import { SocialLinks } from './social_links'

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const MAX_MESSAGE = 4000

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
    'border-line bg-ink/70 text-cream placeholder:text-muted/60 focus:border-signal focus:ring-signal/30 w-full rounded-md border px-3.5 py-2.5 text-sm transition outline-none focus:ring-2'

export const Contact = () => {
    const ref = useReveal<HTMLElement>()
    const [status, setStatus] = useState<Status>('idle')
    const [error, setError] = useState('')
    const [messageLength, setMessageLength] = useState(0)
    const openedAt = useRef(0)

    useEffect(() => {
        openedAt.current = Date.now()
    }, [])

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form)) as Record<
            string,
            string
        >

        if (!ENDPOINT) {
            setError('The contact form is not configured here.')
            setStatus('error')
            return
        }

        setStatus('sending')
        setError('')
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    elapsed: Date.now() - openedAt.current,
                }),
            })
            if (!res.ok) {
                const body = (await res.json().catch(() => ({}))) as {
                    error?: string
                }
                throw new Error(
                    res.status === 429
                        ? 'Too many messages right now. Try again in a minute.'
                        : (body.error ?? 'Something went wrong.')
                )
            }
            form.reset()
            setMessageLength(0)
            setStatus('sent')
        } catch (err) {
            setError(
                err instanceof Error && err.message !== 'Failed to fetch'
                    ? err.message
                    : 'Could not reach the server.'
            )
            setStatus('error')
        }
    }

    return (
        <section
            id="contact"
            ref={ref}
            className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 text-left"
        >
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
                <div className="reveal">
                    <SectionLabel>contact</SectionLabel>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Let’s build something
                    </h2>
                    <p className="text-muted mt-4 max-w-sm leading-relaxed">
                        Robotics, IoT, real-time data, or a role you think I’d
                        fit. Send a note and it lands straight in my inbox.
                    </p>
                    <div className="mt-8">
                        <SocialLinks />
                    </div>
                </div>

                <div className="reveal border-line bg-panel/60 rounded-xl border p-6 sm:p-8">
                    {status === 'sent' ? (
                        <div
                            role="status"
                            className="flex min-h-[340px] flex-col items-center justify-center text-center"
                        >
                            <CheckCircleIcon className="text-signal h-12 w-12" />
                            <p className="mt-4 text-lg font-semibold">
                                Message sent
                            </p>
                            <p className="text-muted mt-1 text-sm">
                                Thanks for reaching out. I’ll reply by email
                                soon.
                            </p>
                            <button
                                type="button"
                                onClick={() => setStatus('idle')}
                                className="text-signal mt-6 font-mono text-xs hover:underline"
                            >
                                send another →
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block">
                                    <span className="text-muted mb-1.5 block font-mono text-xs">
                                        name
                                    </span>
                                    <input
                                        name="name"
                                        required
                                        maxLength={100}
                                        autoComplete="name"
                                        className={fieldClass}
                                        placeholder="Ada Lovelace"
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-muted mb-1.5 block font-mono text-xs">
                                        email
                                    </span>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        maxLength={200}
                                        autoComplete="email"
                                        className={fieldClass}
                                        placeholder="you@company.com"
                                    />
                                </label>
                            </div>

                            <label className="block">
                                <span className="text-muted mb-1.5 flex justify-between font-mono text-xs">
                                    message
                                    <span
                                        className={
                                            messageLength > MAX_MESSAGE * 0.9
                                                ? 'text-coral'
                                                : ''
                                        }
                                    >
                                        {messageLength}/{MAX_MESSAGE}
                                    </span>
                                </span>
                                <textarea
                                    name="message"
                                    required
                                    minLength={10}
                                    maxLength={MAX_MESSAGE}
                                    rows={6}
                                    onChange={(e) =>
                                        setMessageLength(e.target.value.length)
                                    }
                                    className={`${fieldClass} resize-y`}
                                    placeholder="What are you working on?"
                                />
                            </label>

                            {/* Honeypot: hidden from people, filled in by bots */}
                            <div aria-hidden="true" className="hidden">
                                <label>
                                    Website
                                    <input
                                        name="website"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </label>
                            </div>

                            {status === 'error' && (
                                <p
                                    role="alert"
                                    className="text-coral flex items-start gap-2 text-sm"
                                >
                                    <ExclamationTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                    <span>
                                        {error} You can also reach me on{' '}
                                        <a
                                            href={SOCIALS.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >
                                            LinkedIn
                                        </a>
                                        .
                                    </span>
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="bg-signal text-ink group inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition hover:brightness-110 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                            >
                                {status === 'sending'
                                    ? 'Sending…'
                                    : 'Send message'}
                                <PaperAirplaneIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}
