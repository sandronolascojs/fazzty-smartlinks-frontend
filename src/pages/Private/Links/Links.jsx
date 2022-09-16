import React, { useState, useEffect } from 'react'
import CardAudioPlayer from '../../../components/CardAudioPlayer'
import Loading from '../../../components/Loading/Loading'
import Navbar from '../../../components/Navbar/Navbar'
import TrackCard from '../../../components/TrackCard/TrackCard'
import { FaLink, FaClone } from 'react-icons/fa'
import { useLinksContext } from '../../../hooks/useLinksContext'
import { getLinksPopularEndpoint } from '../../../services/links.services'

export default function Links () {
  const [loading, setLoading] = useState(true)
  const [copiedMessage, setCopiedMessage] = useState(false)
  const [text, setText] = useState()
  const [loadingPopular, setLoadingPopular] = useState(true)
  const [popular, setPopular] = useState([])
  const { linksState, getLinks } = useLinksContext()

  const handleCopy = async (e) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(text)
      setCopiedMessage(true)
      return setTimeout(() => {
        setCopiedMessage(false)
      }, 2500)
    }
  }

  const getPopular = async () => {
    const response = await getLinksPopularEndpoint()
    setPopular(response.data.data[0])
    setText(`http://localhost:3000/${response.data.data[0].publicUrl}`)
    setLoadingPopular(false)
  }

  useEffect(() => {
    const getData = async () => {
      await getPopular()
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
        <div className='mx-64 py-8'>
          <div>
              <label className='font-black text-2xl'>Popular Link</label>
              <div className='flex justify-between'>
                {
                  loadingPopular
                    ? <Loading />
                    : <section className='py-8 flex w-full justify-between items-center'>
                    <div className='flex flex-1'>
                      <img src={popular.images.spotify || popular.images.deezer} alt={popular.name} className='w-64 h-64 object-cover'/>
                    </div>
                    <div className='flex flex-1 flex-col gap-2 items-center justify-center'>
                      <div className='grid grid-cols-1 gap-2'>
                        <label className='font-black text-zinc-800 text-2xl'>{popular.name}</label>
                        <span className='font-medium text-zinc-800'>{popular.artists.join(', ')}</span>
                      </div>
                      <div>
                        <CardAudioPlayer preview={popular.previewUrl.spotify || popular.previewUrl.deezer || popular.previewUrl.napster} />
                      </div>
                      <div className='flex py-4 gap-2'>
                        <span className='text-sm text-zinc-800 font-semibold bg-zinc-200 py-2 px-3 rounded-md'>{popular.visits.length} Visits</span>
                        <span onClick={handleCopy} className='flex items-center justify-center gap-1 text-sm text-white font-semibold cursor-pointer bg-sky-600 py-2 px-3 rounded-md'><FaClone /> Copy Link</span>
                      </div>
                      {copiedMessage ? <div><span className='flex gap-1 items-center justify-center text-sm text-white border border-zinc-400 font-medium bg-zinc-800 bg-opacity-80 py-2 px-3 rounded-sm'><FaLink /> Copied to clipboard</span></div> : null}
                    </div>
                  </section>
                }
              </div>
              <div className='w-full  pb-0.5 my-8 bg-zinc-200'></div>
          </div>
          <div className='flex flex-wrap justify-center gap-8'>
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
        </div>
        </>
  )
}
