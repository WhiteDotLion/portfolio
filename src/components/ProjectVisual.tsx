type ProjectVisualProps = {
  projectName: string
  label: string
  index: number
}

export function ProjectVisual({ projectName, label, index }: ProjectVisualProps) {
  return (
    <div className={`project-visual visual-${index + 1}`} role="img" aria-label={label}>
      <div className="visual-toolbar" aria-hidden="true"><span /><span /><span /></div>
      <div className="visual-canvas" aria-hidden="true">
        <div className="visual-sidebar"><span /><span /><span /><span /></div>
        <div className="visual-content">
          <div className="visual-title-line" />
          <div className="visual-metric-row"><div /><div /><div /></div>
          <div className="visual-data-grid"><span /><span /><span /><span /></div>
        </div>
        <div className="phone-frame">
          <div className="phone-speaker" />
          <div className="phone-screen"><span /><span /><span /></div>
        </div>
      </div>
      <p><span>{projectName}</span> Espacio reservado para captura real</p>
    </div>
  )
}
