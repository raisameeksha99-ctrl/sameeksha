import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { SectionProps, SectionSize } from '@/types'

const sizeMap: Record<SectionSize, string> = {
  sm: 'section-padding-sm',
  md: 'section-padding',
  lg: 'section-padding',
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, size = 'md', id, as: Tag = 'section', ...props }, ref) => {
    return (
      <Tag
        ref={ref as React.Ref<never>}
        id={id}
        className={cn(sizeMap[size], className)}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Section.displayName = 'Section'

export { Section }
