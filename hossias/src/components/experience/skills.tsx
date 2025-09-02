// Skills.tsx
import React from 'react'

type BadgeColor =
    | 'blue'
    | 'green'
    | 'purple'
    | 'orange'
    | 'red'
    | 'pink'
    | 'indigo'
    | 'cyan'
    | 'gray'
    | 'yellow'

type SkillBadge = {
    label: string
    /** Tailwind color key from the palette above. If omitted, "gray" is used. */
    color?: BadgeColor
    /** Optional custom HEX (uses inline style, bypassing Tailwind). */
    hex?: string
}

type SkillsSection = {
    title: string
    badges: SkillBadge[]
    note?: string
}

const COLOR_MAP: Record<BadgeColor, string> = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
    red: 'bg-red-100 text-red-800',
    pink: 'bg-pink-100 text-pink-800',
    indigo: 'bg-indigo-100 text-indigo-800',
    cyan: 'bg-cyan-100 text-cyan-800',
    gray: 'bg-gray-100 text-gray-800',
    yellow: 'bg-yellow-100 text-yellow-800',
}

const Badge: React.FC<SkillBadge> = ({ label, color = 'gray', hex }) => {
    if (hex) {
        return (
            <span
                className="rounded-full px-3 py-1 text-sm"
                style={{
                    backgroundColor: `${hex}22`, // faint bg
                    color: hex,
                    border: `1px solid ${hex}55`,
                }}
            >
                {label}
            </span>
        )
    }
    return (
        <span className={`rounded-full px-3 py-1 text-sm ${COLOR_MAP[color]}`}>
            {label}
        </span>
    )
}

type SkillsProps = {
    /** Pass your own data; defaults shown below. */
    data?: SkillsSection[]
}

export const Skills: React.FC<SkillsProps> = ({ data = DEFAULT_SKILLS }) => {
    return (
        <div className="p-4 text-left">
            <div className="grid gap-6 md:grid-cols-2">
                {data.map((section) => (
                    <div key={section.title}>
                        <h3 className="text-secondary/70 mb-3 text-lg font-bold">
                            {section.title}
                        </h3>
                        <div className="space-y-2">
                            <div className="flex flex-wrap gap-2">
                                {section.badges.map((b) => (
                                    <Badge key={b.label} {...b} />
                                ))}
                            </div>
                            {section.note ? (
                                <p className="text-secondary/60 text-sm">
                                    {section.note}
                                </p>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/** -------- Example data you can edit/replace -------- */
export const DEFAULT_SKILLS: SkillsSection[] = [
    {
        title: 'Programming Languages',
        badges: [
            { label: 'TypeScript (JavaScript)', color: 'blue' },
            { label: 'Python', color: 'green' },
            { label: 'C++', color: 'purple' },
            { label: 'SQL', color: 'orange' },
        ],
        note: 'MySQL, PostgreSQL, SQLite, NoSQL (MongoDB)',
    },
    {
        title: 'APIs & UI Development',
        badges: [
            { label: 'REST', color: 'red' },
            { label: 'GraphQL', color: 'pink' },
            { label: 'gRPC', color: 'indigo' },
            { label: 'React', color: 'cyan' },
            { label: 'Next.js [SSR]', color: 'gray' },
            { label: 'Tailwind CSS', color: 'blue' },
        ],
    },
    {
        title: 'Cloud Platforms',
        badges: [
            { label: 'AWS', color: 'yellow' },
            { label: 'IBM Cloud', color: 'blue' },
            { label: 'GCP', color: 'green' },
        ],
        note: 'EC2, Cognito, EKS, LightSail, RDS, S3, Bare-metal, Hybrid Cloud, Compute Engine, Cloud Build, Firestore',
    },
    {
        title: 'DevOps & Tools',
        badges: [
            { label: 'Kubernetes', color: 'purple' },
            { label: 'Docker', color: 'red' },
            { label: 'Apache Kafka', color: 'orange' },
            { label: 'Linux', color: 'green' },
            { label: 'Git', color: 'blue' },
            { label: 'CI/CD', color: 'yellow' },
            // Example of a custom hex color chip:
            // { label: "Bazel", hex: "#3F51B5" },
        ],
    },
]
