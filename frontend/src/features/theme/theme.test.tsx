import { render, screen } from '@testing-library/react'
import { useEffect } from 'react'
import { vi } from 'vitest'

import { ThemeProvider } from './ThemeProvider'
import { resolveThemePreference } from './theme-utils'
import { useTheme } from './useTheme'

function ThemeProbe() {
  const { theme } = useTheme()

  useEffect(() => {
    document.body.dataset.themeProbe = theme
  }, [theme])

  return <p>{theme}</p>
}

function ThemeToggleProbe() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <p>{theme}</p>
      <button onClick={toggleTheme} type="button">
        toggle
      </button>
    </>
  )
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    delete document.documentElement.dataset.theme
    delete document.body.dataset.themeProbe
    vi.unstubAllGlobals()
  })

  it('always starts in light mode on entry', () => {
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    )

    expect(screen.getByText('light')).toBeInTheDocument()
    expect(document.documentElement.dataset.theme).toBe('light')
  })

  it('still allows switching to dark mode after load', async () => {
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
        <ThemeToggleProbe />
      </ThemeProvider>,
    )

    expect(screen.getByText('light')).toBeInTheDocument()
    expect(document.documentElement.dataset.theme).toBe('light')

    await screen.getByRole('button', { name: 'toggle' }).click()

    expect(screen.getByText('dark')).toBeInTheDocument()
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(resolveThemePreference({ prefersDark: true })).toBe('dark')
  })
})
