import { useEffect, useRef } from 'react'

/** Adds `is-visible` to the element (and any `.reveal` children) when it scrolls into view. */
export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null)

    useEffect(() => {
        const root = ref.current
        if (!root) return
        const targets = [root, ...root.querySelectorAll<HTMLElement>('.reveal')]
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        e.target.classList.add('is-visible')
                        io.unobserve(e.target)
                    }
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )
        targets.forEach((t) => io.observe(t))
        return () => io.disconnect()
    }, [])

    return ref
}
