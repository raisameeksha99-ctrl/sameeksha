import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind classes with clsx support.
 * Handles conditional classes and resolves conflicts correctly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Stagger delay helper for animations.
 * Returns inline style with animation delay based on index.
 */
export function staggerDelay(index: number, base = 0.1) {
  return { style: { animationDelay: `${index * base}s` } }
}

/**
 * Formats a number as a compact string (e.g. 1200 → "1.2k").
 */
export function formatCompact(n: number): string {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(n)
}

/**
 * Slugifies a string for use in IDs / anchors.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}
