import { useEffect, useState } from 'react'

export default function useHandlePage (paginator) {
  const [page, setPage] = useState(1)

  const handleNextPage = () => {
    paginator.totalPages === page ? setPage(page) : setPage(page + 1)
  }

  const handlePrevPage = () => {
    page === 1 ? setPage(page) : setPage(page - 1)
  }

  useEffect(() => {
    setPage(1)
  }, [paginator.totalPages])

  return { page, handleNextPage, handlePrevPage }
}
