import React from 'react'
import { AmazonMusicLogo } from '../components/Icons/AmazonMusicLogo'
import { AppleMusicLogo } from '../components/Icons/AppleMusicLogo'
import { DeezerLogo } from '../components/Icons/DeezerLogo'
import { NapsterLogo } from '../components/Icons/NapsterLogo'
import { SpotifyLogo } from '../components/Icons/SpotifyLogo'
import { YoutubeLogo } from '../components/Icons/YoutubeLogo'

export const correctIcon = (storeName) => {
  switch (storeName) {
    case 'Deezer':
      return <DeezerLogo />
    case 'Napster':
      return <NapsterLogo />
    case 'Spotify':
      return <SpotifyLogo />
    case 'Apple Music':
      return <AppleMusicLogo />
    case 'Youtube':
      return <YoutubeLogo />
    case 'Amazon Music':
      return <AmazonMusicLogo />
    default:
      return storeName
  }
}
