import { useEffect, useRef } from 'react'

const SIGNAL = '62, 193, 184'
const CORAL = '229, 138, 138'

/** Drifting sensor-network mesh that links nearby nodes and reaches toward the cursor. */
export const NodeMesh = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        let w = 0
        let h = 0
        let nodes: { x: number; y: number; vx: number; vy: number }[] = []
        const mouse = { x: -9999, y: -9999 }
        let raf = 0

        const resize = () => {
            const rect = canvas.getBoundingClientRect()
            w = rect.width
            h = rect.height
            canvas.width = w * dpr
            canvas.height = h * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            const count = Math.round(Math.min(110, (w * h) / 11000))
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
            }))
        }

        const link = 120
        const reach = 170

        const frame = () => {
            ctx.clearRect(0, 0, w, h)
            for (const n of nodes) {
                if (!reduceMotion) {
                    n.x += n.vx
                    n.y += n.vy
                }
                if (n.x < 0 || n.x > w) n.vx *= -1
                if (n.y < 0 || n.y > h) n.vy *= -1
                const dm = Math.hypot(n.x - mouse.x, n.y - mouse.y)
                if (dm < reach && !reduceMotion) {
                    n.x += (mouse.x - n.x) * 0.006
                    n.y += (mouse.y - n.y) * 0.006
                }
            }
            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i]
                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j]
                    const d = Math.hypot(a.x - b.x, a.y - b.y)
                    if (d < link) {
                        ctx.strokeStyle = `rgba(${SIGNAL}, ${(1 - d / link) * 0.22})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.stroke()
                    }
                }
                const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
                const near = dm < reach
                if (near) {
                    ctx.strokeStyle = `rgba(${CORAL}, ${(1 - dm / reach) * 0.55})`
                    ctx.beginPath()
                    ctx.moveTo(a.x, a.y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.stroke()
                }
                ctx.fillStyle = near ? `rgb(${CORAL})` : `rgba(${SIGNAL}, 0.65)`
                ctx.beginPath()
                ctx.arc(a.x, a.y, near ? 2.4 : 1.6, 0, Math.PI * 2)
                ctx.fill()
            }
            raf = requestAnimationFrame(frame)
        }

        const parent = canvas.parentElement!
        const onMove = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect()
            mouse.x = e.clientX - r.left
            mouse.y = e.clientY - r.top
        }
        const onLeave = () => {
            mouse.x = -9999
            mouse.y = -9999
        }

        resize()
        frame()
        const ro = new ResizeObserver(resize)
        ro.observe(canvas)
        parent.addEventListener('pointermove', onMove)
        parent.addEventListener('pointerleave', onLeave)
        return () => {
            cancelAnimationFrame(raf)
            ro.disconnect()
            parent.removeEventListener('pointermove', onMove)
            parent.removeEventListener('pointerleave', onLeave)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
        />
    )
}
