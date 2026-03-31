import {
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

import { ThemeContext, type ThemeContextValue } from './theme-context'
import {
  THEME_STORAGE_KEY,
  resolveThemePreference,
  type ThemeMode,
} from './theme-utils'

function readStoredTheme(): string | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

function getSystemPrefersDark() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeMode>(() =>
    resolveThemePreference({
      storedTheme: readStoredTheme(),
      prefersDark: getSystemPrefersDark(),
    }),
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Ignore storage availability issues and keep the in-memory theme.
    }
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
