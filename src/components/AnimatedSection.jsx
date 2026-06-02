import { useScrollAnimation } from '../hooks/useScrollAnimation'

const animations = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    hidden: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    hidden: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  scaleUp: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
}

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 800,
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const { ref, isVisible } = useScrollAnimation()

  const anim = animations[animation] || animations.fadeUp

  return (
    <Tag
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      <div
        className={`transition-all ${isVisible ? anim.visible : anim.hidden}`}
        style={{
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </Tag>
  )
}
