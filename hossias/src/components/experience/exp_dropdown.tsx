import { useState } from 'react'
import type { ExperienceItem } from './TYPES_exp'
import {
    ChevronDownIcon,
    ChevronUpIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/20/solid'

export const ExperienceDropdown = ({
    experience,
}: {
    experience: ExperienceItem
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`border-l-4 ${experience.borderColor} mb-4 rounded-xs`}>
            <div
                className="group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-xs p-2 2xl:p-8"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Animated background */}
                <span className="bg-secondary/50 absolute top-0 left-0 z-0 h-full w-0 transition-all duration-300 group-hover:w-full"></span>

                <div className="z-10 flex items-center space-x-3">
                    <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="h-20 w-20 rounded-lg bg-white object-contain p-1 shadow-sm xl:h-28 xl:w-28 2xl:h-30 2xl:w-30"
                    />
                    <div className="items-left flex flex-col">
                        <h1 className="text-success/80 group-hover:text-primary-light text-lg font-semibold xl:text-lg 2xl:text-xl">
                            {experience.title}
                        </h1>
                        <span className="text-secondary/50 group-hover:text-primary text-sm lg:text-sm xl:text-base 2xl:text-lg">
                            {experience.period}
                        </span>
                        <p
                            onClick={() =>
                                window.open(experience.link, '_blank')
                            }
                            className="group text-secondary/50 group-hover:text-primary flex cursor-pointer items-center gap-2 text-base hover:font-bold hover:underline lg:text-base xl:text-lg 2xl:text-xl"
                        >
                            {experience.company} – {experience.location}
                            <ArrowTopRightOnSquareIcon className="text-success/50 group-hover:text-primary h-5 w-5" />
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    {isOpen ? (
                        <ChevronUpIcon className="h-8 w-8 text-white" />
                    ) : (
                        <ChevronDownIcon className="h-8 w-8 text-white" />
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="animate-in slide-in-from-top-2 mt-3 ml-15 space-y-3 duration-200">
                    <div>
                        <span className="4xl:text-xl text-sm font-semibold text-blue-600 lg:text-base 2xl:text-lg">
                            Key Technologies:{' '}
                        </span>
                        <span className="4xl:text-xl text-secondary/80 text-sm lg:text-base 2xl:text-lg">
                            {experience.technologies}
                        </span>
                    </div>
                    <ul className="text-secondary/60 list-inside list-disc space-y-1 text-sm">
                        {experience.responsibilities.map(
                            (responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}
