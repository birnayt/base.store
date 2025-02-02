import { useState, useEffect, useCallback } from 'react'

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null

    return {
      width,
      height,
    }
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (!hasWindow) {
      return undefined
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [hasWindow, getWindowDimensions])

  return windowDimensions
}
