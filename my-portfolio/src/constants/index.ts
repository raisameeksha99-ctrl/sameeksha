export const SITE = {
  name: 'Sameeksha Rai',
  role: 'UI/UX Designer',
  tagline: 'Designing with intention. Building with purpose.',
  email: 'hello@sameeksha.design',
  url: 'https://sameeksha.design',
} as const

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const

export const SOCIAL_LINKS = [
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
  { label: 'Behance', href: 'https://behance.net', icon: 'behance' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
] as const

export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.7,
  },
  ease: {
    spring: [0.175, 0.885, 0.32, 1.275] as const,
    smooth: [0.4, 0, 0.2, 1] as const,
    outExpo: [0.19, 1, 0.22, 1] as const,
  },
  stagger: 0.08,
} as const
