import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { AppToaster } from '../components/ui/sonner'
import { ThemeProvider } from '../features/theme/ThemeProvider'
import { queryClient } from './query-client'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <AppToaster />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
