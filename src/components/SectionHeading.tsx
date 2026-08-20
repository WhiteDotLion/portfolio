type SectionHeadingProps = {
  eyebrow: string
  title: string
  id: string
}

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  )
}
