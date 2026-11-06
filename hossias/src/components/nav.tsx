import { useEffect, useState } from 'react'
import { ArrowDownTrayIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { RESUME_PDF } from '../data/resume'

const LINKS = [
    { id: 'work', label: 'work' },
    { id: 'skills', label: 'skills' },
    { id: 'education', label: 'education' },
    { id: 'contact', label: 'contact' },
]

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState<string | null>(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })

        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries)
                    if (e.isIntersecting) setActive(e.target.id)
            },
            { rootMargin: '-45% 0px -50% 0px' }
        )
        LINKS.forEach((l) => {
            const el = document.getElementById(l.id)
            if (el) io.observe(el)
        })
        const top = document.getElementById('top')
        if (top) io.observe(top)

        return () => {
            window.removeEventListener('scroll', onScroll)
            io.disconnect()
        }
    }, [])

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                scrolled
                    ? 'border-line bg-ink/80 border-b backdrop-blur-md'
                    : 'border-b border-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                {/* Name at the top of the page; becomes "back to top" once scrolled */}
                <a
                    href="#top"
                    aria-label={
                        scrolled ? 'Back to top' : 'Harrison Ossias, home'
                    }
                    className="group text-signal relative grid font-mono text-sm font-medium"
                >
                    <span
                        aria-hidden="true"
                        className={`col-start-1 row-start-1 transition-all duration-300 ${
                            scrolled
                                ? '-translate-y-2 opacity-0'
                                : 'translate-y-0 opacity-100'
                        }`}
                    >
                        h.ossias
                    </span>
                    <span
                        aria-hidden="true"
                        className={`col-start-1 row-start-1 inline-flex items-center gap-1.5 transition-all duration-300 ${
                            scrolled
                                ? 'translate-y-0 opacity-100'
                                : 'pointer-events-none translate-y-2 opacity-0'
                        }`}
                    >
                        <ArrowUpIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
                        top
                    </span>
                </a>
                <div className="flex items-center gap-5 font-mono text-xs sm:gap-7">
                    {LINKS.map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            className={`hidden transition-colors sm:inline ${
                                active === l.id
                                    ? 'text-cream'
                                    : 'text-muted hover:text-cream'
                            }`}
                        >
                            {active === l.id && (
                                <span className="text-signal">▸ </span>
                            )}
                            {l.label}
                        </a>
                    ))}
                    <a
                        href={RESUME_PDF}
                        download="Harrison_Ossias_Resume.pdf"
                        className="border-line hover:border-signal hover:text-signal inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 transition-colors"
                    >
                        <ArrowDownTrayIcon className="h-3.5 w-3.5" />
                        resume
                    </a>
                </div>
            </div>
        </nav>
    )
}
