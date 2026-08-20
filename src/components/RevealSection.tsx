import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealSectionProps = {
  children: ReactNode
  className?: string
  id?: string
  labelledBy?: string
}

export function RevealSection({ children, className = '', id, labelledBy }: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`}
      aria-labelledby={labelledBy}
    >
      {children}
    </section>
  )
}
