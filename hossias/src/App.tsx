/*---------------------------libraries------------------------ */
import './styles/App.css'
import { useState, useEffect } from 'react'

/*---------------------------components------------------------ */
import { TitleCard } from './components/title/title_card'
import ExpSection from './components/experience/exp_section'

export default function App() {
    const [showExperience, setShowExperience] = useState(false)
    const [fadeInContent, setFadeInContent] = useState(false)

    // Handle fade-in timing - start fade after layout transition begins
    useEffect(() => {
        if (showExperience) {
            // Delay the content fade-in to start when the layout transition is halfway done
            const timer = setTimeout(() => {
                setFadeInContent(true)
            }, 500) // 500ms delay (half of the 1000ms transition)
            return () => clearTimeout(timer)
        } else {
            // Reset fade when going back
            setFadeInContent(false)
        }
    }, [showExperience])

    return (
        <>
            {/* Main content section */}
            <section className="from-primary via-primary-light to-primary-sec h-screen overflow-hidden bg-gradient-to-b text-white">
                {/* Content wrapper */}
                <div className="relative h-screen w-screen">
                    {/* Desktop Layout: Side by side */}
                    <div className="hidden h-full w-full md:flex">
                        {/* Left: Title Card Section - transitions based on state */}

                        <div
                            className={`h-full flex-shrink-0 transition-all duration-1000 ease-in-out ${showExperience ? 'w-1/3 2xl:w-2/5' : 'w-full'} `}
                        >
                            <TitleCard
                                onViewExperience={() => setShowExperience(true)}
                            />
                        </div>

                        {/* Right: Experience Section - slides in when activated */}
                        <div
                            className={`h-full items-center justify-center transition-all duration-1000 ease-in-out ${
                                showExperience
                                    ? 'flex-1 opacity-100'
                                    : 'w-0 overflow-hidden opacity-0'
                            } `}
                        >
                            <ExpSection
                                onBackToTitle={() => setShowExperience(false)}
                                fadeInContent={fadeInContent}
                                isMobile={false}
                            />
                        </div>
                    </div>

                    {/* Mobile Layout: Vertical stack */}
                    <div className="flex h-full w-full flex-col md:hidden">
                        {/* Top: Title Card Section - transitions based on state */}
                        <div
                            className={`w-full flex-shrink-0 transition-all duration-1000 ease-in-out ${showExperience ? 'h-0 overflow-hidden opacity-0' : 'h-full'} `}
                        >
                            <TitleCard
                                onViewExperience={() => setShowExperience(true)}
                            />
                        </div>

                        {/* Bottom: Experience Section - slides in when activated */}
                        <div
                            className={`flex w-full items-center justify-center transition-all duration-1000 ease-in-out ${
                                showExperience
                                    ? 'h-full opacity-100'
                                    : 'h-0 overflow-hidden opacity-0'
                            } `}
                        >
                            <ExpSection
                                onBackToTitle={() => setShowExperience(false)}
                                fadeInContent={fadeInContent}
                                isMobile={true}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
