'use client'

import { useEffect } from 'react'

export default function ParallaxInit() {
  useEffect(() => {
    let ticking = false

    function update() {
      const scrollY = window.scrollY
      const vh = window.innerHeight

      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => {
        const speed = parseFloat(el.dataset.parallax ?? '0.15')
        const rect = el.getBoundingClientRect()
        // Only animate when element is near the viewport
        if (rect.bottom < -vh || rect.top > vh * 2) return
        const offset = (scrollY - (scrollY - rect.top + vh * 0.5 - el.offsetHeight * 0.5)) * speed
        el.style.transform = `translateY(${offset * -1}px)`
      })

      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
