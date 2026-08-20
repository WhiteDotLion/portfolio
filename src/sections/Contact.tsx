import { Container } from '../components/Container'
import { RevealSection } from '../components/RevealSection'
import { contactLinks } from '../data/portfolio'

export function Contact() {
  return (
    <RevealSection id="contacto" className="contact-section" labelledBy="contact-title">
      <Container>
        <p className="section-eyebrow">Contacto</p>
        <div className="contact-layout">
          <div>
            <h2 id="contact-title">¿Hablamos?</h2>
            <p>Estoy abierto a nuevas oportunidades como Full Stack Developer y Android Developer.</p>
          </div>
          <ul className="contact-links">
            {contactLinks.map((link) => {
              const isExternal = link.href?.startsWith('http')

              return (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      aria-label={
                        isExternal
                          ? `${link.label} (abre en una pestaña nueva)`
                          : link.label
                      }
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span aria-disabled="true" title="Enlace pendiente de configurar">
                      {link.label} <small>Pendiente</small>
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </RevealSection>
  )
}
