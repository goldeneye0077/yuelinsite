import '@testing-library/jest-dom/vitest'
import { beforeEach, vi } from 'vitest'

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
})

beforeEach(() => {
  vi.mocked(window.scrollTo).mockClear()
})
