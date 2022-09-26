import React, { useRef, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { getSongDuration } from '../../utilities/convertSongDuration'

export default function CardAudioPlayer ({ preview }) {
  const [playing, setPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(
    {
      progress: 0,
      songDuration: '0:00'
    }
  )

  const handlePlay = () => {
    audioPlayer.current.volume = 0.3
    setPlaying(!playing)
    if (!playing) {
      audioPlayer.current.play()

      const tracks = Array.from(document.getElementsByTagName('audio'))
      tracks.forEach(function (track) {
        track.addEventListener('play', (event) => {
          tracks.forEach(function (track) {
            if (track !== event.target) {
              track.pause()
            }
          })
        })
      })
    } else {
      audioPlayer.current.pause()
    }
  }

  const audioPlayer = useRef()

  const onPlaying = () => {
    const duration = audioPlayer.current.duration
    const currentTime = audioPlayer.current.currentTime
    const progress = (currentTime / duration) * 100

    const songDuration = getSongDuration(currentTime)
    setCurrentSong({ progress, songDuration })

    if (progress === 100) {
      setCurrentSong({ progress: 0, songDuration })
      setPlaying(false)
    }
  }

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX

    const songProgress = (offset / width) * 100

    audioPlayer.current.currentTime = (audioPlayer.current.duration / 100) * songProgress
  }

  const clickRef = useRef()

  return (
    <div className='flex items-center object-cover justify-center w-60 pt-4 pb-2'>
        <audio ref={audioPlayer} onTimeUpdate={onPlaying}>
            <source src={preview} type='audio/mpeg' />
        </audio>
            <div className='flex items-center justify-center gap-3 w-full'>

                <button className='text-zinc-800 hover:text-sky-600 ease-in-out duration-75' onClick={handlePlay}>{playing ? <FaPause /> : <FaPlay /> }</button>
                <div className="w-full bg-zinc-300 rounded-full h-1.5 cursor-pointer" onClick={checkWidth} ref={clickRef}>
                    <div className="bg-sky-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${currentSong.progress}%` }}></div>
                </div>

                <span className='font-semibold text-zinc-800 text-xs'>{currentSong.songDuration}</span>
            </div>
    </div>
  )
}
