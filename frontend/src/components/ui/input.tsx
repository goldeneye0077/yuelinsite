import * as React from 'react'

import { cn } from '../../lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid = false, type = 'text', ...props }, ref) => (
    <input
      className={cn(
        'flex h-11 w-full rounded-xl border border-input/70 bg-background/80 px-4 py-2 text-sm text-foreground shadow-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-2 focus:ring-ring/25 focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        invalid &&
          'border-destructive/70 focus:border-destructive focus:ring-destructive/20',
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export { Input }
