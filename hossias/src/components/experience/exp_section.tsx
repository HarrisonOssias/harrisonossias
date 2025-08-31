import { Resume } from './resume'
interface ExpSectionProps {
    onBackToTitle: () => void
    fadeInContent: boolean
}

const ExpSection = ({ onBackToTitle, fadeInContent }: ExpSectionProps) => {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center">
            {/* Back button - fades in with content */}
            <button
                onClick={onBackToTitle}
                className={`bg-primary-light/50 hover:bg-primary-light/80 border-success/30 hover:border-success/60 absolute top-8 left-8 rounded-full border p-3 text-white shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-xl ${fadeInContent ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} `}
                aria-label="Back to title"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                </svg>
            </button>

            <div
                className={`w-full max-w-4xl transition-all duration-700 ease-out ${fadeInContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} `}
            >
                <div
                    className={`exp-details bg-primary-light/20 border-success/20 rounded-lg border p-8 backdrop-blur-sm transition-all delay-200 duration-700 ease-out ${fadeInContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} `}
                >
                    <Resume />
                </div>
            </div>
        </div>
    )
}

export default ExpSection
