import React, { useState, useEffect } from 'react'
import CardAudioPlayer from '../../../components/CardAudioPlayer'
import Loading from '../../../components/Loading/Loading'
import Navbar from '../../../components/Navbar/Navbar'
import TrackCard from '../../../components/TrackCard/TrackCard'
import VisitsCharts from '../../../components/VisitsCharts'
import { FaLink, FaClone, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { getLinksApiEndPoint } from '../../../services/links.services'
import { PublicRoutes } from '../../../models/routes'
import useCopyLink from '../../../hooks/useCopyLink'
import { artistsUpperCasse } from '../../../utilities/artistUpperCasseFirstLetter'
import useHandlePage from '../../../hooks/useHandlePage'
import { useDispatch } from 'react-redux'
import { loadLinks } from '../../../context/data/linksSlice'

export default function Links () {
  const [loading, setLoading] = useState(true)
  const [loadingPopular, setLoadingPopular] = useState(true)
  const [links, setLinks] = useState([])
  const [paginator, setPaginator] = useState([])
  const { page, handleNextPage, handlePrevPage } = useHandlePage(paginator)
  const [newestLink, setNewestLink] = useState([])
  const { copiedMessage, setShareLink, handleCopy } = useCopyLink()

  const dispatch = useDispatch()

  const getNewestLink = async () => {
    const response = await getLinksApiEndPoint()
    const popular = response.data.data.data
    setNewestLink(popular[0])
    setShareLink(`${PublicRoutes.BASEURL_SLUG_LINKS}/${PublicRoutes.SLUG_LINKS}/${newestLink.publicUrl}`)
    setLoadingPopular(false)
  }

  const fistLoad = async (page) => {
    try {
      const response = await getLinksApiEndPoint(page)
      const links = response.data.data.data
      setPaginator(response.data.data.paginator)
      setLinks(links)
      dispatch(loadLinks(links))
      getNewestLink()
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const load = async () => {
      await fistLoad(page)
    }
    load()
    document.title = 'Fazzty - Links'
  }, [page])

  return (
    <>
        <Navbar
        linkOne={'dashboard'}
        linkTwo={'links'}
        linkThree={'stats'}
        linkFour={'account'}
        method={'logout'}
        />
        {loading
          ? <Loading />
          : (
          <div className='mx-64 py-12'>
          <div>
          <label className='font-black text-zinc-800 text-2xl'>Newest Link</label>
              <div className='flex justify-between pt-6'>
                {
                  loadingPopular
                    ? <Loading />
                    : (
                    <section className='py-6 flex w-full justify-between items-center'>
                        <div className='flex flex-3 flex-col gap-4 w-[275px]'>
                        <img src={newestLink.images.spotify || newestLink.images.deezer} alt={newestLink.name} className='w-64 h-64 object-cover'/>
                          <div className='grid grid-cols-1 gap-2'>
                            <label className='font-black text-zinc-800 text-2xl'>{newestLink.name}</label>
                            <span className='font-medium text-zinc-800 truncate'>{artistsUpperCasse(newestLink.artists)}</span>
                          </div>
                          <CardAudioPlayer preview={newestLink.previewUrl.spotify || newestLink.previewUrl.deezer || newestLink.previewUrl.napster} />
                          <div className='flex w-fit flex-col gap-2'>
                            <div className='flex py-4 gap-2'>
                              <span className='text-sm text-zinc-800 font-semibold bg-zinc-200 py-2 px-3 rounded-md'>{newestLink.visits.length} Visits</span>
                              <span onClick={handleCopy} className='flex items-center justify-center gap-1 text-sm text-white font-semibold cursor-pointer bg-sky-600 py-2 px-3 rounded-md'><FaClone /> Copy Link</span>
                            </div>
                              <div>
                              {copiedMessage ? <span className='flex gap-1 w-fit items-center justify-center text-sm text-white border border-zinc-400 font-medium bg-zinc-800 bg-opacity-80 py-2 px-3 rounded-sm'><FaLink /> Copied to clipboard</span> : null}
                              </div>
                          </div>
                        </div>
                        <div className='bg-gray-50 flex flex-1 mx-10 my-18 h-84 items-center justify-center py-6 opacity-90 rounded-md shadow-md'>
                          <div className='w-full h-full px-12'>
                            <VisitsCharts track={newestLink.visits} />
                          </div>
                        </div>
                      </section>
                      )
                }
              </div>
              <div className='w-full  pb-0.5 my-8 bg-zinc-200'></div>
          </div>
          <div className='flex flex-wrap justify-center gap-8'>
          {links.map(link => (
              <TrackCard
              key={link._id}
              id={link._id}
              explicit={link.explicit}
              images={link.images}
              name={link.name}
              artists={artistsUpperCasse(link.artists)}
              previewUrl={link.previewUrl.spotify || link.previewUrl.deezer || link.previewUrl.napster }
              publicUrl={link.publicUrl}
              />
          ))}
          </div>
          <div className='flex gap-2 items-center justify-center py-8'>
            <button onClick={handlePrevPage} className='text-lg text-zinc-800 font-semibold bg-zinc-200 py-2 px-3 rounded-md'><FaArrowLeft /></button>
            <span className='text-lg text-zinc-800 font-semibold'>
              | {page} |
            </span>
            <button className='text-lg text-zinc-800 font-semibold bg-zinc-200 py-2 px-3 rounded-md' onClick={handleNextPage}>
              <FaArrowRight />
            </button>
          </div>
        </div>
            )}
        </>
  )
}
