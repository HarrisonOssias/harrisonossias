import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { NodeMesh } from './node_mesh'
import { SocialLinks } from '../social_links'
import { STATS } from '../../data/resume'
import portrait400Avif from '../../assets/portrait-400.avif'
import portrait640Avif from '../../assets/portrait-640.avif'
import portrait400Webp from '../../assets/portrait-400.webp'
import portrait640Webp from '../../assets/portrait-640.webp'
import portrait640Jpg from '../../assets/portrait-640.jpg'

const PORTRAIT_SIZES =
    '(min-width: 1024px) 320px, (min-width: 640px) 288px, 224px'

export const Hero = () => {
    return (
        <header id="top" className="relative overflow-hidden">
            <div className="relative min-h-[88svh]">
                <NodeMesh />
                {/* Fade the mesh into the page at the bottom */}
                <div className="from-ink pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />

                <div className="pointer-events-none relative mx-auto flex min-h-[88svh] max-w-6xl flex-col-reverse items-center justify-center gap-10 px-6 pt-24 pb-16 md:flex-row md:justify-between md:gap-16">
                    <div className="max-w-2xl text-left">
                        {/* <span className="animate-fade-up border-line bg-ink/80 text-signal inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs backdrop-blur">
                            <span className="bg-signal animate-pulse-dot h-1.5 w-1.5 rounded-full" />
                            Robotics System Developer
                        </span> */}
                        <span>Hi I'm</span>

                        <h1 className="animate-fade-up mt-6 text-5xl leading-[1.02] font-semibold tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-7xl">
                            Harrison
                            <br />
                            Ossias
                        </h1>

                        <p className="animate-fade-up text-muted mt-6 max-w-xl text-base leading-relaxed [animation-delay:160ms] sm:text-lg">
                            A Robotics and IoT software developer, building
                            everything from device firmware to real-time cloud
                            telemetry dashboards for medical robots, power
                            grids, and other systems that can’t go down.
                        </p>

                        <div className="animate-fade-up pointer-events-auto mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
                            <a
                                href="#work"
                                className="bg-signal text-ink group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition hover:brightness-110 active:scale-[0.98]"
                            >
                                View my experience
                                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#contact"
                                className="border-line hover:border-signal/60 inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm transition active:scale-[0.98]"
                            >
                                <EnvelopeIcon className="text-muted h-4 w-4" />
                                Contact me
                            </a>
                            <SocialLinks className="ml-2" />
                        </div>
                    </div>

                    <div className="animate-fade-up pointer-events-auto relative shrink-0 [animation-delay:120ms]">
                        <div className="border-signal/40 absolute -inset-3 rounded-2xl border border-dashed" />
                        <picture>
                            <source
                                type="image/avif"
                                srcSet={`${portrait400Avif} 400w, ${portrait640Avif} 640w`}
                                sizes={PORTRAIT_SIZES}
                            />
                            <source
                                type="image/webp"
                                srcSet={`${portrait400Webp} 400w, ${portrait640Webp} 640w`}
                                sizes={PORTRAIT_SIZES}
                            />
                            <img
                                src={portrait640Jpg}
                                alt="Harrison Ossias"
                                width={640}
                                height={640}
                                fetchPriority="high"
                                decoding="async"
                                className="border-line relative h-56 w-56 rounded-xl border object-cover grayscale-[15%] transition duration-500 hover:grayscale-0 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                            />
                        </picture>
                        <span className="bg-ink border-line text-muted absolute -bottom-3 left-4 rounded border px-2 py-0.5 font-mono text-[11px]">
                            Toronto, ON
                        </span>
                    </div>
                </div>
            </div>

            <dl className="border-line divide-line relative mx-auto grid max-w-6xl divide-y border-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {STATS.map((s) => (
                    <div key={s.label} className="px-6 py-5 text-left">
                        <dd
                            className={`text-2xl font-semibold tracking-tight sm:text-3xl ${s.highlight ? 'text-signal' : ''}`}
                        >
                            {s.value}
                        </dd>
                        <dt className="text-muted mt-1 font-mono text-xs">
                            {s.label}
                        </dt>
                    </div>
                ))}
            </dl>
        </header>
    )
}
