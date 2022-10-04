import React from 'react'
import { createPortal } from 'react-dom'
import { ModalBackground, ModalContainer } from './Modal.styles'

function Modal ({ children }) {
  return createPortal(
        <ModalBackground>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalBackground>,
        document.getElementById('modal-root')
  )
}

export default Modal
