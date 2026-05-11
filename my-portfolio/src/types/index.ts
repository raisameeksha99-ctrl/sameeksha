import type { HTMLAttributes, ReactNode } from 'react'

/* ─── Layout ──────────────────────────────────────────────── */
export interface ChildrenProps {
  children: ReactNode
}

export interface ClassNameProps {
  className?: string
}

export interface BaseProps extends ChildrenProps, ClassNameProps {}

/* ─── Section ─────────────────────────────────────────────── */
export type SectionSize = 'sm' | 'md' | 'lg'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  size?: SectionSize
  id?: string
  as?: 'section' | 'div' | 'article' | 'main'
}

/* ─── Container ───────────────────────────────────────────── */
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  size?: ContainerSize
  as?: 'div' | 'header' | 'footer' | 'nav' | 'main'
}

/* ─── Typography ──────────────────────────────────────────── */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingSize = 'display' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel
  size?: HeadingSize
  gradient?: boolean
  className?: string
  children: ReactNode
}

/* ─── Animation ───────────────────────────────────────────── */
export interface AnimationConfig {
  delay?: number
  duration?: number
  once?: boolean
}
