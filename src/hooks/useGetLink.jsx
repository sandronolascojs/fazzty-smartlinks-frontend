import { useState, useEffect } from 'react'
import {
  getLinkApiEndPoint,
  getLinkSlugApiEndPoint
} from '../services/links.services'

export default function useGetLink ({ slug, id }) {
  const [link, setLink] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    return async () => {
      try {
        if (slug) {
          const response = await getLinkSlugApiEndPoint(slug)
          if (response.error) {
            return setError(response.message)
          }

          setLink(response.data)
          return setLoading(false)
        } else if (id) {
          const response = await getLinkApiEndPoint(id)
          if (response.data.error) {
            return setError(response.message)
          }
          setLink(response.data)
          return setLoading(false)
        }
      } catch (err) {
        return setError(err)
      }
    }
  }, [id, slug])

  return { link, loading, error }
}
