import { Container } from '../components/Container'
import { RevealSection } from '../components/RevealSection'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/portfolio'

export function Experience() {
  return (
    <RevealSection id="experiencia" className="experience-section" labelledBy="experience-title">
      <Container>
        <SectionHeading eyebrow="Trayectoria" title="Experiencia" id="experience-title" />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div>
                <p className="experience-period">{item.period}</p>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
              </div>
              <div className="experience-detail">
                <p>{item.description}</p>
                {item.highlights && <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}
