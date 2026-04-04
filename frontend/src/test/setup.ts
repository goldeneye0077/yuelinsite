import '@testing-library/jest-dom/vitest'
import { beforeEach, vi } from 'vitest'

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
})

Object.defineProperty(navigator, 'clipboard', {
  configurable: true,
  value: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
})

beforeEach(() => {
  vi.mocked(window.scrollTo).mockClear()
  vi.mocked(navigator.clipboard.writeText).mockClear()
})
