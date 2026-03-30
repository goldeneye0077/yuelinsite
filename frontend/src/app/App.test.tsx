import { render, screen } from '@testing-library/react'

import { App } from './App'

describe('App', () => {
  it('renders the project brand and foundation summary', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /shenzhen yuelin technology/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/building the bilingual industrial site foundation/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /api health/i })).toHaveAttribute(
      'href',
      'http://localhost:8000/api/health',
    )
  })
})
