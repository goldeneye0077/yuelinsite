import * as React from 'react'

import { cn } from '../../lib/utils'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid = false, ...props }, ref) => (
    <textarea
      className={cn(
        'flex min-h-[144px] w-full rounded-xl border border-input/70 bg-background/80 px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-2 focus:ring-ring/25 focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        invalid &&
          'border-destructive/70 focus:border-destructive focus:ring-destructive/20',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'

export { Textarea }
