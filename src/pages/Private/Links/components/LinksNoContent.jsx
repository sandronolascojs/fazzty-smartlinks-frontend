import React from 'react'

// icons
import { FaBuffer } from 'react-icons/fa'

// components
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton'
import EmptyBoxLotties from './EmptyBoxLotties'

// styles
import {
  LinksNoContentContainer,
  LinksNoContentParagraph,
  LinksNoContentText
} from '../styled-components/LinksNoContent.styles'

export default function LinksNoContent () {
  return (
    <>
      <LinksNoContentContainer>
        <EmptyBoxLotties />
        <LinksNoContentText>
          You don&apos;t have any links yet
        </LinksNoContentText>
        <LinksNoContentParagraph>
          Share your links with your friends and followers. <br />
          You can also track the number of clicks on your links.
        </LinksNoContentParagraph>
        <PrimaryButton>
          <FaBuffer />
          Create Link
        </PrimaryButton>
      </LinksNoContentContainer>
    </>
  )
}
