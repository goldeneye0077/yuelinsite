import type { ThemeMode } from '../../features/theme/theme-utils'

type ShellChartTheme = {
  background: string
  colorScheme: string[]
  axis: {
    labelColor: string
    gridColor: string
    domainColor: string
  }
  tooltip: {
    background: string
    borderColor: string
    textColor: string
  }
}

export const lightChartTheme: ShellChartTheme = {
  background: '#FFFFFF',
  colorScheme: ['#0D4D7A', '#D8892B', '#6B7E90', '#5F8FB6'],
  axis: {
    labelColor: '#526679',
    gridColor: '#D9E2EA',
    domainColor: '#C3D0DA',
  },
  tooltip: {
    background: '#FFFFFF',
    borderColor: '#C3D0DA',
    textColor: '#112132',
  },
}

export const darkChartTheme: ShellChartTheme = {
  background: '#0E1B29',
  colorScheme: ['#56B0E8', '#F0A94B', '#7F97AB', '#4BC0B7'],
  axis: {
    labelColor: '#A8B9C8',
    gridColor: '#173248',
    domainColor: '#2C455A',
  },
  tooltip: {
    background: '#14283A',
    borderColor: '#2C455A',
    textColor: '#F3F7FB',
  },
}

export function getChartTheme(theme: ThemeMode) {
  return theme === 'dark' ? darkChartTheme : lightChartTheme
}
