'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * AnimateInit — Global scroll-reveal engine.
 * Re-runs on every route change so elements animate correctly
 * after Next.js client-side navigation.
 *
 * Elements with [data-animate] start invisible and slide/fade in
 * when they enter the viewport. Supports:
 *   data-animate="up" | "left" | "right" | "scale" | "fade"
 *   data-delay="1"–"6"  (×80 ms stagger)
 */
export default function AnimateInit() {
  const pathname = usePathname()

  useEffect(() => {
    // Small delay so Next.js finishes rendering the new page DOM
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('na-in')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )

      // Reset + observe all animated elements on the current page
      document.querySelectorAll('[data-animate]').forEach((el) => {
        el.classList.remove('na-in')
        observer.observe(el)
      })

      return () => observer.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname]) // ← re-run on every navigation

  return null
}
