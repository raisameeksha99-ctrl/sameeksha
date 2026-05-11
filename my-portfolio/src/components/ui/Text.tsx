import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
type TextVariant = 'default' | 'muted' | 'subtle' | 'brand'

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  size?: TextSize
  variant?: TextVariant
  as?: 'p' | 'span' | 'div' | 'label' | 'li'
  balance?: boolean
}

const sizeStyles: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
}

const variantStyles: Record<TextVariant, string> = {
  default: 'text-[var(--fg)]',
  muted: 'text-[var(--fg-muted)]',
  subtle: 'text-[var(--fg-subtle)]',
  brand: 'text-[var(--color-brand-500)]',
}

/**
 * Text — semantic paragraph/span with size and variant control.
 */
const Text = forwardRef<HTMLElement, TextProps>(
  (
    { children, className, size = 'base', variant = 'muted', as: Tag = 'p', balance = false, ...props },
    ref
  ) => {
    return (
      <Tag
        ref={ref as React.Ref<never>}
        className={cn(
          'leading-relaxed',
          sizeStyles[size],
          variantStyles[variant],
          balance && 'text-balance',
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Text.displayName = 'Text'

export { Text }
