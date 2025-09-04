/*---------------------------Libraries--------------------------- */
import '../../styles/App.css'

/*---------------------------Components-------------------------- */
import Links from '../link_components/links'

interface TitleCardProps {
    onViewExperience: () => void
}

export const TitleCard = ({ onViewExperience }: TitleCardProps) => {
    return (
        <>
            <div className="flex w-full justify-self-start pt-4 pl-4 sm:pt-10 sm:pl-10 2xl:pt-20 2xl:pl-20">
                <Links />
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden font-sans">
                <img
                    src="/hossias.png"
                    className="xs:h-60 h-60 rounded-sm sm:h-80 xl:h-80 2xl:h-120"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="bold text-base sm:text-lg xl:text-3xl">
                        <span>Hello, my name is </span>
                        <span className="text-success">Harrison Ossias.</span>
                    </p>

                    <p className="w-11/12 items-center justify-self-center text-center text-sm sm:w-2/3 sm:text-base xl:text-lg">
                        I'm working on robotic and IoT systems to make our
                        critical infrastructure safer, more efficient, and with
                        any luck, a bit more sustainable.
                    </p>
                </div>

                {/* Buttons row */}
                <div className="flex gap-4">
                    <button
                        onClick={onViewExperience}
                        className="bg-secondary hover:bg-secondary/50 text-primary flex items-center gap-2 rounded-md p-2 font-mono text-base font-bold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
                    >
                        <span>View My Experience</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </button>

                    <a
                        href="mailto:harrison.ossias@gmail.com"
                        className="bg-primary hover:bg-primary/80 x flex items-center gap-2 rounded-md px-2 py-1 font-mono text-base text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </>
    )
}
