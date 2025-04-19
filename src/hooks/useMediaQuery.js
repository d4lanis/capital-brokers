import { useState, useEffect } from 'react'

export const breakpoints = {
    small: '(max-width: 480px)',
    medium: '(max-width: 768px)',
    large: '(max-width: 1024px)',
  }  

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const listener = (event) => setMatches(event.matches)
    mediaQueryList.addEventListener('change', listener)

    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}