export type ThemeMode = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'yuelin-theme'

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === 'light' || value === 'dark'
}

export function resolveThemePreference(options: {
  storedTheme?: string | null
  prefersDark?: boolean
} = {}): ThemeMode {
  if (isThemeMode(options.storedTheme)) {
    return options.storedTheme
  }

  return options.prefersDark ? 'dark' : 'light'
}
