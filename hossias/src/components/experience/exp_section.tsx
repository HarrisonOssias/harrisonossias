import { Resume } from './resume'
import { Education } from './education'
import { Skills } from './skills'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/16/solid'
interface ExpSectionProps {
    onBackToTitle: () => void
    fadeInContent: boolean
    isMobile?: boolean
}

const ExpSection = ({
    onBackToTitle,
    fadeInContent,
    isMobile = false,
}: ExpSectionProps) => {
    return (
        <div
            className="bg-secondary/2 relative flex h-screen flex-col items-center overflow-y-scroll py-8"
            style={{ scrollbarWidth: 'auto', msOverflowStyle: 'scrollbar' }}
        >
            <div className="flex w-full flex-1 items-center justify-center">
                {/* Back button - fades in with content */}
                <button
                    onClick={onBackToTitle}
                    className={`absolute top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white/20 hover:text-white hover:shadow-lg ${isMobile ? 'right-4' : 'left-4'} ${fadeInContent ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} `}
                    aria-label="Back to title"
                >
                    {isMobile ? (
                        <ArrowUpIcon className="h-4 w-4" />
                    ) : (
                        <ArrowLeftIcon className="h-4 w-4" />
                    )}
                </button>

                <div
                    className={`h-[calc(100vh-6rem)] w-full max-w-4xl rounded-lg transition-all duration-700 ease-out ${fadeInContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} `}
                >
                    <div
                        className={`exp-details h-full backdrop-blur-sm transition-all delay-200 duration-700 ease-out ${fadeInContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} `}
                    >
                        <TabGroup className="flex h-full flex-col">
                            <TabList className="bg-secondary/20 m-1 flex flex-shrink-0 space-x-1 rounded-xl p-1">
                                <Tab className="data-selected:bg-secondary ui-not-selected:text-primary-light ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white text-primary w-full rounded-lg py-2.5 text-sm leading-5 font-semibold focus:outline-none data-selected:shadow xl:text-base 2xl:text-lg">
                                    Experience
                                </Tab>
                                <Tab className="data-selected:bg-secondary ui-not-selected:text-primary-light ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white text-primary w-full rounded-lg py-2.5 text-sm leading-5 font-semibold focus:outline-none data-selected:shadow xl:text-base 2xl:text-lg">
                                    Education
                                </Tab>
                                <Tab className="data-selected:bg-secondary ui-not-selected:text-primary-light ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white text-primary w-full rounded-lg py-2.5 text-sm leading-5 font-semibold focus:outline-none data-selected:shadow xl:text-base 2xl:text-lg">
                                    Skills
                                </Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel className="rounded-xl text-white ring-white ring-offset-2 focus:outline-none">
                                    <Resume />
                                </TabPanel>
                                <TabPanel className="rounded-xl ring-white ring-offset-2 focus:outline-none">
                                    <Education />
                                </TabPanel>
                                <TabPanel className="rounded-xl ring-white ring-offset-2 focus:outline-none">
                                    <Skills />
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpSection
