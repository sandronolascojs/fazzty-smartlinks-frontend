import React from 'react'
import { PrivateRoutes, PublicRoutes } from '@/models/routes'
import { useNavigate } from 'react-router-dom'

// hooks
import useCopyLink from '@/hooks/useCopyLink'

// icons
import { FaLink, FaPen } from 'react-icons/fa'

// components
import CardAudioPlayer from '../CardAudioPlayer'

// styled components
import {
  TrackCardArtist,
  TrackCardButtons,
  TrackCardButtonsContainer,
  TrackCardContainer,
  TrackCardImage,
  TrackCardImageHoverWrapper,
  TrackCardTitle,
  TrackCardWrapper
} from './TrackCard.styles'
import ModalTransparent from '../ModalTransparent/ModalTransparent'
import CopyClipboardModal from '../CopyClipboardModal/CopyClipboardModal'

export default function TrackCard ({
  id,
  images,
  name,
  artists,
  previewUrl,
  publicUrl
}) {
  const { spotify, deezer } = images
  const image = spotify || deezer
  const link = `${PublicRoutes.BASEURL_SLUG_LINKS}/${PublicRoutes.SLUG_LINKS}/${publicUrl}`

  const { copiedMessage, handleCopy } = useCopyLink({ link })
  const navigate = useNavigate()

  const handleEdit = (e) => {
    e.preventDefault()
    navigate(`/${PrivateRoutes.LINKS}/${PrivateRoutes.EDIT_LINKS}/${id}`)
  }

  return (
    <TrackCardContainer>

      <TrackCardWrapper>

        <TrackCardImageHoverWrapper>

          <TrackCardImage src={image} alt={name} />

          <TrackCardButtonsContainer>
            <TrackCardButtons onClick={handleEdit}>
              <FaPen />
            </TrackCardButtons>

            <TrackCardButtons onClick={handleCopy}>
              <FaLink />
            </TrackCardButtons>
          </TrackCardButtonsContainer>

        </TrackCardImageHoverWrapper>

        {copiedMessage
          ? (
          <ModalTransparent>
            <CopyClipboardModal />
          </ModalTransparent>
            )
          : null}

        <TrackCardTitle>{name}</TrackCardTitle>
        <TrackCardArtist>{artists}</TrackCardArtist>

        <CardAudioPlayer preview={previewUrl} />
      </TrackCardWrapper>
    </TrackCardContainer>
  )
}
