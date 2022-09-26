import { useState } from 'react'

export default function useHandlePage (paginator) {
  const [page, setPage] = useState(1)

  const handleNextPage = () => {
    paginator.hasNextPage === true ? setPage(page + 1) : setPage(page)
  }

  const handlePrevPage = () => {
    paginator.hasPrevPage === true ? setPage(page - 1) : setPage(page)
  }

  return { page, handleNextPage, handlePrevPage }
}
