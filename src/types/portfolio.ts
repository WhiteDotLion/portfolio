export type Project = {
  name: string
  description: string
  contribution: string
  technologies: string[]
  capabilities?: string[]
  visualLabel: string
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  description: string
  highlights?: string[]
}

export type ContactLink = {
  label: string
  href: string | null
}
