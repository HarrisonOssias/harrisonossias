import '../styles/App.css'

interface TitleCardProps {
    onViewExperience: () => void
}

export const TitleCard = ({ onViewExperience }: TitleCardProps) => {
    return (
        <>
            <div className="flex h-full w-full flex-col items-center justify-center gap-8 overflow-hidden font-sans">
                <img src="/hossias.png" className="h-80 rounded-sm" />
                <p className="flex flex-col items-center justify-center gap-2">
                    <p className="bold text-4xl">
                        <span>Hello, my name is </span>
                        <span className="text-success">Harrison Ossias.</span>
                    </p>

                    <p className="w-2/3 items-center justify-self-center text-center text-xl">
                        I'm working on robotic and IoT systems to make our
                        critical infrastructure safer, more efficient, and with
                        any luck, a bit more sustainable.
                    </p>
                </p>

                <button
                    onClick={onViewExperience}
                    className="bg-success hover:bg-success/80 text-primary flex items-center gap-3 rounded-lg px-8 py-4 font-mono text-lg font-bold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                    <span>View My Experience</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}
