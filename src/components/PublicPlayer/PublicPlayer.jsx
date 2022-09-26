import React, { useRef, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

export default function CardAudioPlayer ({ preview }) {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    audioPlayer.current.volume = 0.3
    setPlaying(!playing)
    if (!playing) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
  }

  const onPlaying = () => {
    const duration = audioPlayer.current.duration
    const currentTime = audioPlayer.current.currentTime
    const progress = (currentTime / duration) * 100

    if (progress === 100) {
      setPlaying(false)
    }
  }

  const audioPlayer = useRef()

  return (
    <>
        <audio ref={audioPlayer} onTimeUpdate={onPlaying}>
            <source src={preview} type='audio/mpeg' />
        </audio>
          <button className='text-zinc-800 absolute hover:text-sky-600 hover:opacity-100 ease-in-out bg-zinc-200 opacity-80 duration-75 text-2xl p-6 rounded-full ' onClick={handlePlay}>{playing ? <FaPause /> : <FaPlay /> }</button>
    </>
  )
}
