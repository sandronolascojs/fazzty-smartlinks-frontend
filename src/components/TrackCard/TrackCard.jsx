import React from 'react'
import { FaLink, FaPen } from 'react-icons/fa'
import useCopyLink from '../../hooks/useCopyLink'
import { PublicRoutes } from '../../models/routes'
import CardAudioPlayer from '../CardAudioPlayer'

export default function TrackCard ({ explicit, images, name, artists, previewUrl, publicUrl }) {
  const { spotify, deezer } = images
  const image = spotify || deezer
  const { copiedMessage, setCopiedMessage } = useCopyLink()

  const handleCopy = async () => {
    const shareLink = `${PublicRoutes.BASEURL_SLUG_LINKS}/${PublicRoutes.SLUG_LINKS}/${publicUrl}`
    navigator.clipboard.writeText(shareLink)
    setCopiedMessage(true)
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(shareLink)
      setCopiedMessage(true)
      return setTimeout(() => {
        setCopiedMessage(false)
      }, 2500)
    }
  }

  return (
        <article className='w-[275px]'>
            <div className='bg-zinc-100 items-center justify-center p-4 rounded-lg shadow-md border'>
                <div className='items-center justify-center'>
                    {explicit === true
                      ? <span className='text-zinc-800 m-2 bg-zinc-400 py-1 px-2 rounded-md font-medium text-xs absolute'>EXPLICIT</span>
                      : null}
                      <div>
                      <img className='h-60 w-60 rounded-lg object-cover z-0' src={image} alt={name}></img>
                        <div className='items-center justify-center gap-2 flex my-4'>
                          <button className='top-2/4 left-2/4 bg-zinc-600 text-white text-lg py-3 px-8 opacity-80 rounded-md'><FaPen /></button>
                          <button onClick={handleCopy} className='top-2/4 left-2/4 bg-sky-600 text-white text-lg py-3 px-8 opacity-80 rounded-md'><FaLink /></button>
                        </div>
                      </div>
                </div>

                <div className='flex flex-col gap-1 mt-3'>
                    <h2 className='font-black text-xl text-zinc-800 truncate'>{name}</h2>
                    <p className='font-medium text-gray-600 truncate'>{artists}</p>
                </div>
                <CardAudioPlayer preview={previewUrl}/>
                {copiedMessage ? <span className='flex my-2 gap-1 w-fit items-center justify-center text-sm text-white border border-zinc-400 font-medium bg-zinc-800 bg-opacity-80 py-2 px-11 rounded-sm'><FaLink /> Copied to clipboard</span> : null}
            </div>
        </article>
  )
}
