import { Container } from '../components/Container'
import { RevealSection } from '../components/RevealSection'

export function About() {
  return (
    <RevealSection id="sobre-mi" className="about-section" labelledBy="about-title">
      <Container className="about-layout">
        <div>
          <p className="section-eyebrow">Sobre mí</p>
          <h2 id="about-title">Una visión completa del producto.</h2>
        </div>
        <div className="about-copy">
          <p>Soy Ingeniero Informático y desarrollador de software con experiencia construyendo aplicaciones Android y participando en sistemas Full Stack.</p>
          <p>Me interesa especialmente desarrollar productos reales y entender el flujo completo entre aplicación, API, datos e infraestructura.</p>
        </div>
      </Container>
    </RevealSection>
  )
}
