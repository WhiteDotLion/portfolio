import type { ContactLink, ExperienceItem, Project } from '../types/portfolio'

export const navigation = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export const projects: Project[] = [
  {
    name: 'Medira',
    description:
      'Plataforma para la gestión y registro de mediciones realizadas en terreno.',
    contribution: 'Desarrollo Android, frontend y backend.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
    ],
    capabilities: [
      'Evidencia fotográfica',
      'Operación offline',
      'Sincronización posterior',
      'API REST',
      'Autenticación',
      'Arquitectura multiempresa',
    ],
    visualLabel: 'Capturas de la aplicación y plataforma Medira',
  },
  {
    name: 'CargoVisión',
    description:
      'Sistema de monitoreo de transporte mediante dispositivos Android y una plataforma central.',
    contribution:
      'Desarrollo de prácticamente toda la aplicación Android y modificaciones puntuales en frontend y backend.',
    technologies: ['Android', 'WebSockets', 'Frontend', 'Backend', 'YOLO'],
    capabilities: [
      'Activación mediante código',
      'Asociación de conductor, canal y dispositivo',
      'Transmisión por viaje',
      'Ubicación, velocidad y recorrido en tiempo real',
      'Mensajes de voz hacia conductores',
      'Cámara frontal y cámara orientada al camino',
      'Integración y configuración de YOLO para detección de personas',
    ],
    visualLabel: 'Capturas de la aplicación Android CargoVisión',
  },
  {
    name: 'Citófono 4G',
    description:
      'Sistema de comunicación y gestión para citofonía conectado a una plataforma administrativa.',
    contribution: 'Participación en el proyecto durante aproximadamente un año.',
    technologies: ['Android', 'XML', 'Django', 'PostgreSQL', 'Jenkins'],
    visualLabel: 'Capturas del sistema Citófono 4G',
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'CLRobotics',
    role: 'Desarrollador de Software',
    period: 'Ago 2023 – Abr 2025',
    description:
      'Desarrollo de software y Android, además de participación en implementaciones tecnológicas en terreno.',
    highlights: [
      'Delegación Presidencial de Talca',
      'Delegación Presidencial de Rancagua',
      'Sala de monitoreo de Carabineros de Rancagua',
    ],
  },
  {
    company: '2la2',
    role: 'Desarrollador de Software',
    period: 'Oct 2025 – 2026',
    description:
      'Participación en desarrollo Android y Full Stack, incluyendo CargoVisión, Medira y distintos prototipos tecnológicos.',
  },
]

export const skillGroups = [
  { title: 'Mobile', skills: ['Kotlin', 'Android', 'Jetpack Compose', 'XML'] },
  { title: 'Frontend', skills: ['React', 'TypeScript'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'Django', 'REST APIs'] },
  {
    title: 'Datos / herramientas',
    skills: ['PostgreSQL', 'Git', 'Jenkins', 'DigitalOcean'],
  },
]

// Completa estos valores cuando los perfiles y el PDF estén disponibles.
export const contactLinks: ContactLink[] = [
  { label: 'LinkedIn', href: null },
  { label: 'GitHub', href: null },
  { label: 'Email', href: null },
]

// Ejemplo futuro: '/cv-bayron-escalante.pdf' para un archivo dentro de public/.
export const cvPath: string | null = null
