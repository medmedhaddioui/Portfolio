import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns [ref, isVisible] — attach ref to the element,
 * use isVisible to toggle CSS classes.
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, isVisible]
}

export default useScrollReveal
