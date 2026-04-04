import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'

import { ThemeContext, type ThemeContextValue } from './theme-context'
import { type ThemeMode } from './theme-utils'

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeMode>('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
      },
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
