import './styles/App.css'
import { TitleCard } from './components/title_card'
import ExpSection from './components/experience/exp_section'
import { useState, useEffect } from 'react'

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
                    <div className="flex h-full w-full">
                        {/* Left: Title Card Section - transitions based on state */}
                        <div
                            className={`h-full flex-shrink-0 transition-all duration-1000 ease-in-out ${showExperience ? 'w-1/3' : 'w-full'} `}
                        >
                            <TitleCard
                                onViewExperience={() => setShowExperience(true)}
                            />
                        </div>

                        {/* Right: Experience Section - slides in when activated */}
                        <div
                            className={`h-full transition-all duration-1000 ease-in-out ${showExperience ? 'flex-1 opacity-100' : 'w-0 overflow-hidden opacity-0'} `}
                        >
                            <ExpSection
                                onBackToTitle={() => setShowExperience(false)}
                                fadeInContent={fadeInContent}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
