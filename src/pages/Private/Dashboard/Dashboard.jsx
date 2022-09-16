import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading/Loading.jsx'
import Navbar from '../../../components/Navbar/Navbar.jsx'
import TrackCard from '../../../components/TrackCard/TrackCard.jsx'
import { useLinksContext } from '../../../hooks/useLinksContext.jsx'

export default function Dashboard () {
  const [loading, setLoading] = useState(true)
  const { linksState, getLinks } = useLinksContext()

  useEffect(() => {
    const getData = async () => {
      await getLinks()
    }
    getData()
    setLoading(false)
  }, [])
  return (
        <>
        <Navbar
        linkOne={'dashboard'}
        linkTwo={'links'}
        linkThree={'stats'}
        linkFour={'account'}
        method={'logout'}
        />
          <div className='flex flex-wrap justify-center gap-8 mx-64 py-8'>
          { loading
            ? <Loading />

            : linksState.links.map(link => (
              <TrackCard
              key={link._id}
              explicit={link.explicit}
              images={link.images}
              name={link.name}
              artists={link.artists}
              previewUrl={link.previewUrl.spotify || link.previewUrl.deezer || link.previewUrl.napster }
              />
            ))}
          </div>
        </>
  )
}
