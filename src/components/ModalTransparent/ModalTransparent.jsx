import React from 'react'
import { createPortal } from 'react-dom'
import { ModalBackground, ModalContainer } from './ModalTransparent.styles'

function ModalTransparent ({ children }) {
  return createPortal(
        <ModalBackground>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalBackground>,
        document.getElementById('modal-root')
  )
}

export default ModalTransparent
