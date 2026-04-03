import { AnimatePresence, motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { cn } from '../../lib/utils'
import { Label } from './label'

type FieldProps = PropsWithChildren<{
  label: string
  htmlFor?: string
  error?: string
  hint?: string
  className?: string
  required?: boolean
}>

export function Field({
  children,
  className,
  error,
  hint,
  htmlFor,
  label,
  required = false,
}: FieldProps) {
  return (
    <div className={cn('grid gap-2.5', error && 'field-invalid', className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-destructive">
            *
          </span>
        ) : null}
      </Label>
      {children}
      <AnimatePresence initial={false}>
        {error ? (
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="field-error"
            exit={{ opacity: 0, y: -2 }}
            initial={{ opacity: 0, y: -2 }}
          >
            {error}
          </motion.p>
        ) : hint ? (
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="field-hint"
            exit={{ opacity: 0, y: -2 }}
            initial={{ opacity: 0, y: -2 }}
          >
            {hint}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
