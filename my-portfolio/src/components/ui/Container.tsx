import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { ContainerProps, ContainerSize } from '@/types'

const sizeMap: Record<ContainerSize, string> = {
  sm: 'container-md',
  md: 'container-md',
  lg: 'container-lg',
  xl: 'container-xl',
  full: 'w-full',
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size = 'xl', as: Tag = 'div', ...props }, ref) => {
    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(sizeMap[size], className)}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Container.displayName = 'Container'

export { Container }
