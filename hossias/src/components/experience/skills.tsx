import { SKILLS } from '../../data/resume'
import { useReveal } from '../../hooks/useReveal'
import { SectionLabel } from '../section_label'

export const Skills = () => {
    const ref = useReveal<HTMLElement>()

    return (
        <section
            id="skills"
            ref={ref}
            className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 text-left"
        >
            <SectionLabel>skills</SectionLabel>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                The toolkit
            </h2>

            <div className="border-line bg-line mt-10 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3">
                {SKILLS.map((group, i) => (
                    <div
                        key={group.title}
                        className={`reveal bg-ink hover:bg-panel group p-6 transition-colors ${
                            i === SKILLS.length - 1 ? 'lg:col-span-2' : ''
                        }`}
                        style={{ transitionDelay: `${i * 40}ms` }}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{group.title}</h3>
                            <span className="text-muted group-hover:text-signal font-mono text-xs transition-colors">
                                {String(group.items.length).padStart(2, '0')}
                            </span>
                        </div>
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="border-line text-muted hover:border-signal hover:text-cream rounded border px-2 py-1 font-mono text-xs transition-colors"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
