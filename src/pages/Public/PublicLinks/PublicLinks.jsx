import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLinkSlugApiEndPoint } from '../../../services/links.services'
import { artistsUpperCasse } from '../../../utilities/artistUpperCasseFirstLetter'
import PublicPlayer from '../../../components/PublicPlayer'
import { SpotifyLogo } from '../../../components/Icons/SpotifyLogo'
import { DeezerLogo } from '../../../components/Icons/DeezerLogo'
import { NapsterLogo } from '../../../components/Icons/NapsterLogo'
import { AppleMusicLogo } from '../../../components/Icons/AppleMusicLogo'
import { YoutubeLogo } from '../../../components/Icons/YoutubeLogo'
import { AmazonMusicLogo } from '../../../components/Icons/AmazonMusicLogo'

export default function PublicLinks () {
  const [loading, setLoading] = useState(true)
  const [link, setLink] = useState([])

  const { slug } = useParams()

  const correctIcon = (storeName) => {
    switch (storeName) {
      case 'Deezer':
        return <DeezerLogo />
      case 'Napster':
        return <NapsterLogo />
      case 'Spotify':
        return <SpotifyLogo />
      case 'iTunes':
        return <AppleMusicLogo />
      case 'YouTube':
        return <YoutubeLogo />
      case 'Amazon Music':
        return <AmazonMusicLogo />
      default:
        return storeName
    }
  }

  useEffect(() => {
    const load = async () => {
      const response = await getLinkSlugApiEndPoint(slug)
      const link = response.data
      setLink(link)
      document.title = `${artistsUpperCasse(link.artists)} - ${link.name}`
      setLoading(false)
    }
    load()
  }, [])
  return (
    <>
    {
      loading
        ? <h1>Loading...</h1>
        : <div className='justify-center items-center'>
            <div style={{ backgroundImage: `url(${link.images.spotify || link.images.deezer})` }} className={'max-h-fit w-auto bg-cover bg-center'}>
              <div className='max-h-fit w-auto justify-center items-center backdrop-blur-lg'>
                <div className='flex flex-col justify-center items-center py-12 w-auto max-h-fit'>
                  <section className='bg-zinc-200 p-5 rounded-md shadow-md w-[350px]'>
                    <div className=' flex flex-col items-center justify-center'>
                      <PublicPlayer preview={link.previewUrl.spotify || link.previewUrl.deezer || link.previewUrl.napster} />
                      <img src={link.images.spotify || link.images.deezer} alt={link.name} className='w-80 h-80 object-cover border rounded-lg border-zinc-300' />
                    </div>
                    <div className='py-4 border-b border-zinc-300'>
                      <h2 className='font-bold text-zinc-800 text-2xl py-1 truncate'>{link.name}</h2>
                      <p className='font-medium text-zinc-600 text-lg truncate'>{artistsUpperCasse(link.artists)}</p>
                    </div>
                    <div>
                      {Array.isArray(link.links)
                        ? link.links.map((link, index) => {
                          return (
                            link.visible === true
                              ? <div key={index} className='flex justify-between items-center py-4 border-b border-zinc-300'>
                            <a target='_blank' rel='noreferrer' className='text-zinc-800 font-bold text-lg py-1'>
                              {correctIcon(link.name)}
                            </a>
                            <a href={link.url} target='_blank' className='py-2 px-4 font-semibold text-lg text-zinc-800 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-all hover:ease-in-out' rel="noreferrer">Listen</a>
                          </div>
                              : null
                          )
                        })
                        : null}
                    </div>
                  </section>
                    <Link href={'/'}>
                        <div className='flex align items-center justify-between cursor-pointer mt-4'>
                            <svg className='w-12 h-12 text-zinc-200' fill='currentColor' viewBox="0 0 512 512"><g id="Thunder"><path d="M366.56,234.0073a12.7668,12.7668,0,0,0-11.753-7.5747H296.9443L331.3965,94.6015a14.0681,14.0681,0,0,0-24.1944-12.8252L147.4844,264.1606a12.905,12.905,0,0,0,9.709,21.4067h57.8623L180.6035,417.3984a13.8446,13.8446,0,0,0,7.0225,15.9868,14.2368,14.2368,0,0,0,6.68,1.6924,13.8939,13.8939,0,0,0,10.4922-4.854L364.5156,247.8393A12.7656,12.7656,0,0,0,366.56,234.0073Z"/></g></svg>
                            <p className='text-2xl font-black text-zinc-200'>Fazzty</p>
                        </div>
                    </Link>
                    <p className='my-2 font-medium text-zinc-200 opacity-90 text-base'>&copy; Fazzty - All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
    }
    </>
  )
}
