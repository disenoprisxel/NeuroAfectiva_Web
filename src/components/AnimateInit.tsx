'use client'
import { useEffect } from 'react'

/**
 * AnimateInit — Global scroll-reveal engine.
 * Elements with [data-animate] start invisible and slide/fade in
 * when they enter the viewport. Supports:
 *   data-animate="up" | "left" | "right" | "scale" | "fade"
 *   data-delay="1"–"6"  (×100 ms stagger)
 */
export default function AnimateInit() {
  useEffect(() => {
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

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
