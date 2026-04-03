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
  colorScheme: ['#6366F1', '#0EA5E9', '#334155', '#8B5CF6'],
  axis: {
    labelColor: '#64748B',
    gridColor: '#E2E8F0',
    domainColor: '#CBD5E1',
  },
  tooltip: {
    background: '#FFFFFF',
    borderColor: '#CBD5E1',
    textColor: '#0F172A',
  },
}

export const darkChartTheme: ShellChartTheme = {
  background: '#09090B',
  colorScheme: ['#818CF8', '#38BDF8', '#94A3B8', '#22D3EE'],
  axis: {
    labelColor: '#94A3B8',
    gridColor: '#27272A',
    domainColor: '#334155',
  },
  tooltip: {
    background: '#18181B',
    borderColor: '#334155',
    textColor: '#F8FAFC',
  },
}

export function getChartTheme(theme: ThemeMode) {
  return theme === 'dark' ? darkChartTheme : lightChartTheme
}
