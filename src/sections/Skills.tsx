import { Container } from '../components/Container'
import { RevealSection } from '../components/RevealSection'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <RevealSection className="skills-section" labelledBy="skills-title">
      <Container>
        <SectionHeading eyebrow="Herramientas" title="Tecnologías" id="skills-title" />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}
