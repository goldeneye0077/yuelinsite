import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border text-sm font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default:
          'border-primary/40 bg-accent-gradient text-primary-foreground shadow-soft hover:brightness-[1.03]',
        secondary:
          'border-border/70 bg-secondary/80 text-secondary-foreground backdrop-blur-sm hover:border-primary/20 hover:bg-secondary',
        ghost:
          'border-transparent bg-transparent text-foreground hover:bg-secondary/80 hover:text-foreground',
        outline:
          'border-border/70 bg-card/80 text-card-foreground backdrop-blur-sm hover:border-primary/25 hover:bg-secondary/60',
        destructive:
          'border-destructive/30 bg-destructive/90 text-destructive-foreground hover:bg-destructive',
      },
      size: {
        default: 'min-h-11 px-4 py-2.5',
        sm: 'min-h-9 rounded-lg px-3 py-2 text-xs',
        lg: 'min-h-12 rounded-2xl px-5 py-3 text-sm',
        icon: 'size-10 rounded-xl p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, type = 'button', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(!asChild ? { type } : {})}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }
