import { render, screen } from '@testing-library/react'
import { useEffect } from 'react'
import { vi } from 'vitest'

import { ThemeProvider } from './ThemeProvider'
import { THEME_STORAGE_KEY, resolveThemePreference } from './theme-utils'
import { useTheme } from './useTheme'

function ThemeProbe() {
  const { theme } = useTheme()

  useEffect(() => {
    document.body.dataset.themeProbe = theme
  }, [theme])

  return <p>{theme}</p>
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
    delete document.body.dataset.themeProbe
    vi.unstubAllGlobals()
  })

  it('uses the persisted theme selection', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'dark')

    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    )

    expect(screen.getByText('dark')).toBeInTheDocument()
    expect(document.documentElement.dataset.theme).toBe('dark')
  })

  it('falls back to the system preference when nothing is stored', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockReturnValue({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    )

    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    )

    expect(screen.getByText('dark')).toBeInTheDocument()
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(resolveThemePreference({ prefersDark: true })).toBe('dark')
  })
})
