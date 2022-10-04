import React from 'react'
import WellDoneLotties from './components/WellDoneLotties'
import WellDoneTwoLotties from './components/WellDoneTwoLotties'
import { CopyClipboardModalContainer, CopyClipboardModalSeparator, CopyClipboardModalText, CopyClipboardTextContainer } from './styled-components/CopyClipboardModal.styles'

export default function CopyClipboardModal () {
  return (
    <CopyClipboardModalContainer>
      <div>
        <WellDoneLotties />
        <WellDoneTwoLotties />
      </div>

      <CopyClipboardModalSeparator />

      <CopyClipboardTextContainer>

        <CopyClipboardModalText>
          Link copied to clipboard
        </CopyClipboardModalText>

      </CopyClipboardTextContainer>

    </CopyClipboardModalContainer>
  )
}
