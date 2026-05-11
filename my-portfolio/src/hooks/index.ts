import { useEffect, useState } from 'react'

/**
 * Returns true when the component is mounted (client-only).
 * Useful for avoiding hydration mismatches or window-dependent logic.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

/**
 * Returns the current scroll Y position, updated on scroll.
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return scrollY
}

/**
 * Detects if the user prefers reduced motion.
 */
export function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}

/**
 * Locks body scroll (useful for modals, mobile nav).
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (locked) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [locked])
}
