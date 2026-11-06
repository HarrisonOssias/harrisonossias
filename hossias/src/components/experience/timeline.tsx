import { useState } from 'react'
import {
    ArrowTopRightOnSquareIcon,
    ChevronDownIcon,
} from '@heroicons/react/20/solid'
import { EXPERIENCE, FILTER_SKILLS, type Experience } from '../../data/resume'
import { useReveal } from '../../hooks/useReveal'
import { SectionLabel } from '../section_label'

const Logo = ({ job }: { job: Experience }) =>
    job.logo ? (
        <img
            src={job.logo}
            alt=""
            className="h-11 w-11 shrink-0 rounded-md bg-white object-contain p-1"
        />
    ) : (
        <span className="border-line bg-panel text-signal flex h-11 w-11 shrink-0 items-center justify-center rounded-md border font-mono text-sm font-medium">
            {job.company
                .split(/\s+/)
                .slice(0, 2)
                .map((w) => w[0])
                .join('')}
        </span>
    )

const Job = ({
    job,
    dimmed,
    defaultOpen,
}: {
    job: Experience
    dimmed: boolean
    defaultOpen: boolean
}) => {
    const [open, setOpen] = useState(defaultOpen)
    const panelId = `job-${job.id}`

    return (
        // `reveal` must live on an element whose className never changes: useReveal adds
        // `is-visible` imperatively, and a React className update would wipe it.
        <li className="reveal relative pb-10 pl-8 last:pb-0">
            {/* Timeline node */}
            <span
                className={`border-signal bg-ink absolute top-5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 transition-opacity duration-300 ${dimmed ? 'opacity-25' : ''}`}
            />

            <div
                className={`border-line bg-panel/60 hover:border-signal/40 rounded-xl border transition-[opacity,border-color] duration-300 ${dimmed ? 'opacity-25' : ''}`}
            >
                <button
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-start gap-4 p-5 text-left"
                >
                    <Logo job={job} />
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="text-lg font-semibold">
                                {job.company}
                            </h3>
                            <span className="text-muted font-mono text-xs whitespace-nowrap">
                                {job.period}
                            </span>
                        </div>
                        <p className="text-signal mt-0.5 text-sm">{job.role}</p>
                        <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
                            {job.headline}
                        </p>
                    </div>
                    <ChevronDownIcon
                        className={`text-muted mt-1 h-5 w-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                </button>

                <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                    <div className="overflow-hidden">
                        <div className="px-5 pb-5 sm:pl-[84px]">
                            <ul className="text-muted space-y-2 text-sm leading-relaxed">
                                {job.details.map((d) => (
                                    <li key={d} className="flex gap-3">
                                        <span className="text-coral mt-[3px] font-mono text-xs">
                                            ›
                                        </span>
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={job.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-signal mt-4 inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
                            >
                                {job.location} · visit site
                                <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-line flex flex-wrap gap-1.5 border-t px-5 py-3">
                    {job.skills.map((s) => (
                        <span
                            key={s}
                            className="border-line text-signal/90 rounded border px-2 py-0.5 font-mono text-[11px]"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </li>
    )
}

export const Timeline = () => {
    const [filter, setFilter] = useState<string | null>(null)
    const ref = useReveal<HTMLElement>()
    const matches = filter
        ? EXPERIENCE.filter((j) => j.skills.includes(filter)).length
        : EXPERIENCE.length

    return (
        <section
            id="work"
            ref={ref}
            className="mx-auto max-w-4xl scroll-mt-20 px-6 py-24 text-left"
        >
            <SectionLabel>experience</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Where I’ve built things
            </h2>

            <div
                className="mt-8 flex flex-wrap items-center gap-2"
                role="group"
                aria-label="Filter by skill"
            >
                {FILTER_SKILLS.map((s) => {
                    const on = filter === s
                    return (
                        <button
                            key={s}
                            onClick={() => setFilter(on ? null : s)}
                            aria-pressed={on}
                            className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
                                on
                                    ? 'border-signal bg-signal text-ink'
                                    : 'border-line text-muted hover:border-signal/50 hover:text-cream'
                            }`}
                        >
                            {s}
                        </button>
                    )
                })}
                <span
                    className="text-muted ml-1 font-mono text-xs"
                    aria-live="polite"
                >
                    {filter
                        ? `${matches} of ${EXPERIENCE.length} roles`
                        : 'filter by skill'}
                </span>
            </div>

            <ol className="border-line relative mt-10 ml-1.5 border-l">
                {EXPERIENCE.map((job, i) => (
                    <Job
                        key={job.id}
                        job={job}
                        defaultOpen={i === 0}
                        dimmed={!!filter && !job.skills.includes(filter)}
                    />
                ))}
            </ol>
        </section>
    )
}
