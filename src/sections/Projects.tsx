import { Container } from '../components/Container'
import { ProjectVisual } from '../components/ProjectVisual'
import { RevealSection } from '../components/RevealSection'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <RevealSection id="proyectos" className="projects-section" labelledBy="projects-title">
      <Container>
        <SectionHeading eyebrow="Trabajo seleccionado" title="Proyectos destacados" id="projects-title" />
        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project" key={project.name}>
              <div className="project-copy">
                <p className="project-number">0{index + 1}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-contribution">{project.contribution}</p>
                {project.capabilities && (
                  <ul className="capabilities" aria-label={`Capacidades de ${project.name}`}>
                    {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                  </ul>
                )}
                <ul className="tags" aria-label={`Tecnologías de ${project.name}`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <ProjectVisual projectName={project.name} label={project.visualLabel} index={index} />
            </article>
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}
