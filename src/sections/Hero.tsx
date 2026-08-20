import type { PointerEvent } from 'react'
import { Container } from '../components/Container'
import { cvPath } from '../data/portfolio'

export function Hero() {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    event.currentTarget.style.setProperty('--pointer-x', `${x}%`)
    event.currentTarget.style.setProperty('--pointer-y', `${y}%`)
  }

  return (
    <section id="inicio" className="hero" onPointerMove={handlePointerMove}>
      <div className="hero-glow" aria-hidden="true" />
      <Container className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">Full Stack &amp; Android Developer</p>
          <h1>
            Desarrollo aplicaciones móviles y plataformas web para resolver{' '}
            <span>problemas reales.</span>
          </h1>
          <p className="hero-stack">
            Kotlin <i /> React <i /> TypeScript <i /> Node.js <i /> PostgreSQL
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Ver proyectos <span aria-hidden="true">↘</span>
            </a>
            {cvPath ? (
              <a className="button button-secondary" href={cvPath} download>
                Descargar CV <span aria-hidden="true">↓</span>
              </a>
            ) : (
              <span className="button button-secondary is-disabled" aria-disabled="true" title="El PDF se añadirá próximamente">
                Descargar CV <span aria-hidden="true">↓</span>
              </span>
            )}
          </div>
        </div>
        <div className="hero-aside" aria-label="Enfoque profesional">
          <p className="aside-index">01 — PERFIL</p>
          <p>Construcción de productos digitales desde la experiencia móvil hasta la infraestructura que los sostiene.</p>
          <div className="availability"><span aria-hidden="true" />Disponible para nuevas oportunidades</div>
        </div>
      </Container>
      <a className="scroll-hint" href="#proyectos">Explorar trabajo <span aria-hidden="true">↓</span></a>
    </section>
  )
}
