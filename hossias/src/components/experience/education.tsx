import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { EDUCATION } from '../../data/resume'
import { useReveal } from '../../hooks/useReveal'
import { SectionLabel } from '../section_label'

export const Education = () => {
    const ref = useReveal<HTMLElement>()

    return (
        <section
            id="education"
            ref={ref}
            className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 text-left"
        >
            <SectionLabel>education</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Where I trained
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
                {EDUCATION.map((d) => (
                    <article
                        key={d.school}
                        className="reveal border-line bg-panel/60 hover:border-signal/40 rounded-xl border p-6 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <a
                                href={d.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${d.school} website`}
                                className="shrink-0 rounded-md transition hover:brightness-90"
                            >
                                <img
                                    src={d.logo}
                                    alt=""
                                    className="h-14 w-14 rounded-md bg-white object-contain p-1"
                                />
                            </a>
                            <div className="min-w-0">
                                <h3 className="text-lg leading-snug font-semibold">
                                    {d.degree}
                                </h3>
                                <p className="text-signal mt-0.5 text-sm">
                                    {d.focus}
                                </p>
                                <p className="text-muted mt-1 font-mono text-xs">
                                    <a
                                        href={d.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link hover:text-signal inline-flex items-center gap-0.5 transition-colors"
                                    >
                                        {d.school}
                                        <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </a>{' '}
                                    · {d.period}
                                </p>
                            </div>
                        </div>
                        {d.notes.length > 0 && (
                            <ul className="text-muted mt-5 space-y-2 text-sm leading-relaxed">
                                {d.notes.map((n) => (
                                    <li key={n} className="flex gap-3">
                                        <span className="text-coral mt-[3px] font-mono text-xs">
                                            ›
                                        </span>
                                        <span>{n}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="mt-5 flex flex-wrap gap-1.5">
                            {d.tags.map((t) => (
                                <span
                                    key={t}
                                    className="border-line text-signal/90 rounded border px-2 py-0.5 font-mono text-[11px]"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
