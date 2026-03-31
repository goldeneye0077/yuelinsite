import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider } from '../features/theme/ThemeProvider'
import { queryClient } from './query-client'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
