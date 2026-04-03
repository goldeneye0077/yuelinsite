import { motion } from 'framer-motion'

import { cn } from '../../lib/utils'

export function Skeleton({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: [0.52, 0.96, 0.52] }}
      className={cn(
        'rounded-xl bg-gradient-to-r from-secondary/90 via-muted/70 to-secondary/90',
        className,
      )}
      initial={{ opacity: 0.52 }}
      transition={{ duration: 1.2, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
    />
  )
}
