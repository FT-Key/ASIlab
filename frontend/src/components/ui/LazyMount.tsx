import { useEffect, useRef, useState } from 'react'

interface LazyMountProps {
  children: React.ReactNode
  rootMargin?: string
}

export default function LazyMount({ children, rootMargin = '100px' }: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return <div ref={ref}>{visible ? children : null}</div>
}
