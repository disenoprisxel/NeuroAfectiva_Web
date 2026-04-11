'use client'

import { useEffect } from 'react'

export default function ParallaxInit() {
  useEffect(() => {
    let ticking = false
    const vh = window.innerHeight

    // Auto-tag hero images and section images that should move slower
    function autoTag() {
      // First <img> inside the first <section> after <main> → slow parallax on images
      document.querySelectorAll<HTMLElement>(
        'main section img, main section [data-parallax]'
      ).forEach(el => {
        if (!el.dataset.parallax) {
          el.dataset.parallax = '0.072'
          // Expand images so parallax movement never reveals container background
          if (el.tagName === 'IMG') {
            el.style.height = '120%'
            el.style.marginTop = '-10%'
            el.style.objectFit = 'cover'
          }
        }
      })

      // CTA / dark sections — subtle background drift
      document.querySelectorAll<HTMLElement>(
        'section[style*="gradient"], section[style*="linear-gradient"]'
      ).forEach(el => {
        if (!el.dataset.parallax) {
          el.dataset.parallax = '0.036'
        }
      })

      // Expand ALL parallax images (auto-tagged + explicit) so movement
      // never reveals the container background behind them
      document.querySelectorAll<HTMLElement>('img[data-parallax]').forEach(el => {
        el.style.height = '120%'
        el.style.marginTop = '-10%'
        el.style.objectFit = 'cover'
      })
    }

    function update() {
      const scrollY = window.scrollY

      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => {
        const speed = parseFloat(el.dataset.parallax ?? '0.072')
        const rect = el.getBoundingClientRect()

        // Skip elements far outside viewport
        if (rect.bottom < -vh * 0.5 || rect.top > vh * 1.5) return

        // Offset = how far element center is from viewport center
        const elCenterY = rect.top + rect.height / 2
        const delta = (elCenterY - vh / 2) * speed
        el.style.transform = `translateY(${delta}px)`
        el.style.willChange = 'transform'
      })

      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    // Small delay to let page render before tagging
    const timer = setTimeout(() => {
      autoTag()
      update()
    }, 100)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return null
}
