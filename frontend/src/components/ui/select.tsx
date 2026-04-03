import * as React from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '../../lib/utils'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, invalid = false, ...props }, ref) => (
    <div className="relative">
      <select
        className={cn(
          'flex h-11 w-full appearance-none rounded-xl border border-input/70 bg-background/80 px-4 py-2 pr-11 text-sm text-foreground shadow-sm outline-none transition-all duration-200 focus:border-primary/40 focus:ring-2 focus:ring-ring/25 focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
          invalid &&
            'border-destructive/70 focus:border-destructive focus:ring-destructive/20',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  ),
)
Select.displayName = 'Select'

export { Select }
