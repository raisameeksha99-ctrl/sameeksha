import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-brand-500)] text-white hover:bg-[var(--color-brand-600)] shadow-[var(--shadow-brand)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 active:translate-y-0',
        secondary:
          'bg-[var(--bg-muted)] text-[var(--fg)] border border-[var(--border)] hover:border-[var(--color-brand-500)] hover:text-[var(--color-brand-500)] hover:-translate-y-0.5 active:translate-y-0',
        ghost:
          'text-[var(--fg-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--fg)]',
        outline:
          'border border-[var(--color-brand-500)] text-[var(--color-brand-500)] hover:bg-[var(--color-brand-500)] hover:text-white',
        link:
          'text-[var(--color-brand-500)] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-8 px-3 text-sm rounded-[var(--radius-md)]',
        md: 'h-10 px-5 text-sm rounded-[var(--radius-md)]',
        lg: 'h-12 px-7 text-base rounded-[var(--radius-lg)]',
        xl: 'h-14 px-9 text-base rounded-[var(--radius-lg)]',
        icon: 'h-10 w-10 rounded-[var(--radius-md)]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  asChild?: boolean
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
