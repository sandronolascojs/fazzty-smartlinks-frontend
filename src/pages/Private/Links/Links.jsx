import React, { useState, useEffect } from 'react'

// hooks
import useGetLinks from '@/hooks/useGetLinks'

// components
import LinksNoContent from './components/LinksNoContent'
import LinksWithContent from './components/LinksWithContent'
import Loading from '@/components/Loading/Loading'
import Navbar from '@/components/Navbar/Navbar'

export default function Links () {
  const [limit, setLimit] = useState(8)
  const [trackName, setTrackName] = useState('')
  const { links, page, handleNextPage, handlePrevPage, loading, paginateData } =
    useGetLinks({ limit, trackName })

  useEffect(() => {
    return () => {
      document.title = 'Fazzty - Links'
    }
  }, [])

  if (links.length === 0 && !loading) {
    return (
      <>
        <Navbar />
        <LinksNoContent />
      </>
    )
  } else {
    return (
      <>
        <Navbar />
        {loading
          ? (
          <Loading />
            )
          : (
          <LinksWithContent
            links={links}
            limit={limit}
            page={page}
            setLimit={setLimit}
            setTrackName={setTrackName}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            loading={loading}
            paginateData={paginateData}
          />
            )}
      </>
    )
  }
}
