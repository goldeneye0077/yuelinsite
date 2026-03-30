import { ArrowUpRight, Database, Globe2, Layers3 } from 'lucide-react'

const statusItems = [
  {
    label: 'Frontend',
    value: 'React + Vite',
    detail: 'TypeScript runtime ready for bilingual shell work.',
  },
  {
    label: 'Backend',
    value: 'FastAPI + PostgreSQL',
    detail: 'Health endpoints and migration path will be wired from day one.',
  },
  {
    label: 'Foundation',
    value: 'Docker Compose',
    detail: 'One command startup for local development and verification.',
  },
]

export function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Phase 01 · Platform Foundation</p>
          <h1>Shenzhen Yuelin Technology</h1>
          <p className="hero-summary">
            Building the bilingual industrial site foundation for sensors,
            automation, and technical integration.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="http://localhost:8000/api/health">
              API Health
              <ArrowUpRight size={18} />
            </a>
            <p className="support-copy">
              Compose, FastAPI, and Vite are aligned before content work begins.
            </p>
          </div>
        </div>

        <div className="hero-anchor" aria-hidden="true">
          <div className="anchor-sweep" />
          <div className="anchor-grid" />
          <div className="anchor-mark">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="status-strip" aria-label="Foundation status">
        <div className="status-item">
          <Globe2 size={18} />
          <span>Bilingual shell routes queued next</span>
        </div>
        <div className="status-item">
          <Database size={18} />
          <span>PostgreSQL contract locked for `yuelin_site`</span>
        </div>
        <div className="status-item">
          <Layers3 size={18} />
          <span>Precision Industrial styling baseline in progress</span>
        </div>
      </section>

      <section className="status-grid" aria-label="Implementation tracks">
        {statusItems.map((item) => (
          <article className="status-block" key={item.label}>
            <p className="status-label">{item.label}</p>
            <h2>{item.value}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
