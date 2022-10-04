import { useEffect, useState } from 'react'
import { getLinksApiEndPoint } from '../services/links.services'
import useHandlePage from './useHandlePage'

export default function useGetLinks ({ limit, trackName }) {
  const [loading, setLoading] = useState(true)
  const [paginateData, setPaginateData] = useState({})
  const [links, setLinks] = useState([])
  const { page, handleNextPage, handlePrevPage } = useHandlePage(paginateData)

  useEffect(() => {
    const load = async () => {
      try {
        const response = await getLinksApiEndPoint({ page, limit, trackName })
        const { data, ...paginateData } = response.data
        const paginate = paginateData
        setLinks(data)
        setPaginateData(paginate)
        return setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    load()
  }, [page, limit, trackName])

  return { links, page, handleNextPage, handlePrevPage, loading, paginateData }
}
