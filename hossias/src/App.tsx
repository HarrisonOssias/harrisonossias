import './styles/App.css'
import { CodeBracketIcon } from '@heroicons/react/20/solid'

import { Nav } from './components/nav'
import { Hero } from './components/hero/hero'
import { Timeline } from './components/experience/timeline'
import { Skills } from './components/experience/skills'
import { Education } from './components/experience/education'
import { Contact } from './components/contact'
import { SocialLinks } from './components/social_links'
import { SOCIALS } from './data/resume'

export default function App() {
    return (
        <div className="bg-ink text-cream min-h-screen font-sans">
            <Nav />
            <main>
                <Hero />
                <Timeline />
                <Skills />
                <Education />
                <Contact />
            </main>
            <footer className="border-line border-t">
                <div className="text-muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs sm:flex-row">
                    <span>
                        © {new Date().getFullYear()} Harrison Ossias · Toronto,
                        ON
                    </span>
                    <div className="flex items-center gap-5">
                        <SocialLinks />
                        <a
                            href={SOCIALS.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-signal inline-flex items-center gap-1.5 transition-colors"
                        >
                            <CodeBracketIcon className="h-4 w-4" />
                            view source
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
