import React from 'react'
import CardAudioPlayer from '../CardAudioPlayer'

export default function TrackCard ({ explicit, images, name, artists, previewUrl }) {
  return (
        <article>
            <div className='bg-zinc-100 items-center justify-center p-4 rounded-lg shadow-md border'>
                <div>
                    {explicit === true
                      ? <span className='text-zinc-800 m-2 bg-zinc-400 py-1 px-2 rounded-md font-medium text-xs absolute'>EXPLICIT</span>
                      : null}
                    <img className='h-60 w-60 rounded-lg object-cover' src={images.spotify} alt={name}></img>
                </div>

                <div className='flex flex-col gap-2 mt-3'>
                    <h2 className='font-black text-xl text-zinc-800'>{name}</h2>
                    <p className='font-medium text-gray-600'>{artists.join(', ')}</p>
                </div>
                <CardAudioPlayer preview={previewUrl}/>
            </div>
        </article>
  )
}
