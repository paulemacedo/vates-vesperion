import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollOnParam(param, id) {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get(param) && id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location, param, id])
}