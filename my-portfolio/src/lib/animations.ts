import { type Variants } from 'framer-motion'
import { ANIMATION } from '@/constants'

/* ─── Reusable Framer Motion variants ──────────────────────── */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.ease.outExpo,
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: ANIMATION.duration.normal, ease: ANIMATION.ease.smooth },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: ANIMATION.stagger,
      delayChildren: 0.1,
    },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.ease.outExpo,
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.spring,
    },
  },
}

export const defaultViewport = {
  once: true,
  margin: '-15%',
} as const
