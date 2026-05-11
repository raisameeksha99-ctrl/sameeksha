import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { HeadingProps, HeadingLevel, HeadingSize } from '@/types'

const sizeStyles: Record<HeadingSize, string> = {
  display: 'text-[clamp(2.75rem,6vw,5.5rem)] tracking-[-0.04em] leading-[1.05]',
  xl: 'text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1.1]',
  lg: 'text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.025em] leading-[1.15]',
  md: 'text-[clamp(1.375rem,2.5vw,2rem)] tracking-[-0.02em] leading-[1.2]',
  sm: 'text-[clamp(1.125rem,2vw,1.5rem)] tracking-[-0.01em] leading-[1.3]',
  xs: 'text-base tracking-[-0.005em] leading-[1.4]',
}

const defaultSizeForTag: Record<HeadingLevel, HeadingSize> = {
  h1: 'display',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = 'h2', size, gradient = false, className, children, ...props }, ref) => {
    const resolvedSize = size ?? defaultSizeForTag[Tag]

    return (
      <Tag
        ref={ref}
        className={cn(
          'font-display font-bold',
          sizeStyles[resolvedSize],
          gradient && 'text-gradient',
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Heading.displayName = 'Heading'

export { Heading }
