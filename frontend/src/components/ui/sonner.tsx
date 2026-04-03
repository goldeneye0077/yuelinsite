import { Toaster } from 'sonner'

import { useTheme } from '../../features/theme/useTheme'

export function AppToaster() {
  const { theme } = useTheme()

  return (
    <Toaster
      closeButton
      expand
      position="top-right"
      richColors
      theme={theme === 'dark' ? 'dark' : 'light'}
      toastOptions={{
        classNames: {
          toast:
            'group border border-border/70 bg-card/85 text-card-foreground shadow-glow backdrop-blur-xl',
          title: 'font-semibold tracking-tight',
          description: 'text-sm leading-relaxed text-muted-foreground',
          actionButton: 'bg-primary text-primary-foreground',
          cancelButton: 'bg-secondary text-secondary-foreground',
        },
      }}
    />
  )
}
