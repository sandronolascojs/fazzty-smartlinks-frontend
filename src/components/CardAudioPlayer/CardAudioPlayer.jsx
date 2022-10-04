import React, { useRef, useState } from 'react'

// utilities
import { getSongDuration } from '../../utilities/convertSongDuration'

// icons
import { FaPlay, FaPause } from 'react-icons/fa'

// styles
import {
  CardAudioPlayerBarProgress,
  CardAudioPlayerBarProgressBackground,
  CardAudioPlayerBarProgressWrapper,
  CardAudioPlayerBarTime,
  CardAudioPlayerButton,
  CardAudioPlayerWrapper
} from './CardAudioPlayer.styles'

export default function CardAudioPlayer ({ preview }) {
  const [playing, setPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState({
    progress: 0,
    songDuration: '0:00'
  })

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

      audioPlayer.current.addEventListener('pause', () => {
        setPlaying(false)
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
      setCurrentSong({ progress: 0, songDuration: '0:00' })
      setPlaying(false)
    }
  }

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX

    const songProgress = (offset / width) * 100

    audioPlayer.current.currentTime =
      (audioPlayer.current.duration / 100) * songProgress
  }

  const clickRef = useRef()

  return (
    <CardAudioPlayerWrapper>
      <audio ref={audioPlayer} onTimeUpdate={onPlaying}>
        <source src={preview} type="audio/mpeg" />
      </audio>
      <CardAudioPlayerBarProgressWrapper>
        <CardAudioPlayerButton onClick={handlePlay}>
          {playing ? <FaPause /> : <FaPlay />}
        </CardAudioPlayerButton>
        <CardAudioPlayerBarProgressBackground
          onClick={checkWidth}
          ref={clickRef}
        >
          <CardAudioPlayerBarProgress
            progress={currentSong.progress}
          ></CardAudioPlayerBarProgress>
        </CardAudioPlayerBarProgressBackground>
        <CardAudioPlayerBarTime>
          {currentSong.songDuration}
        </CardAudioPlayerBarTime>
      </CardAudioPlayerBarProgressWrapper>
    </CardAudioPlayerWrapper>
  )
}
