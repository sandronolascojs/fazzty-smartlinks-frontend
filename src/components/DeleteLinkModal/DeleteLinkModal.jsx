import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// api
import { deleteLinkApiEndPoint } from '@/services/links.services'

// hooks
import { useDisableButton } from '@/hooks/useDisableButton'

// icons
import { FaRedoAlt, FaTrash } from 'react-icons/fa'
import {
  DeleteLinkModalButtonSection,
  DeleteLinkModalImage,
  DeleteLinkModalInformation,
  DeleteLinkModalTextError,
  DeleteLinkModalTextPrincipal,
  DeleteLinkModalTextSecondary,
  DeleteLinkModalTextSection,
  DeleteLinkModalWrapper
} from './DeleteLinkModal.styles'
import DangerButton from '../DangerButton/DangerButton'
import { SecundaryButton } from '../SecundaryButton'

function DeleteLinkModal ({ images, closeModal, id }) {
  const [errorMessage, setErrorMessage] = useState(null)
  const { disabled, setDisabled } = useDisableButton()
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      setDisabled(true)
      await deleteLinkApiEndPoint(id)
      setDisabled(false)
      closeModal()
      navigate('/links')
    } catch (err) {
      setErrorMessage(err)
      console.log(err)
      setDisabled(false)
    }
  }

  const handleCancel = () => {
    closeModal()
  }
  return (
    <DeleteLinkModalWrapper>
      <DeleteLinkModalImage src={images} alt="img" />

      <DeleteLinkModalInformation>

        <DeleteLinkModalTextSection>

          <DeleteLinkModalTextPrincipal>
            Delete Link
          </DeleteLinkModalTextPrincipal>

          <DeleteLinkModalTextSecondary>
            This action can&apos;t be undone.
          </DeleteLinkModalTextSecondary>

        </DeleteLinkModalTextSection>

        <DeleteLinkModalButtonSection>

          <SecundaryButton disabled={disabled} clickFunction={handleCancel}>
            <FaRedoAlt /> Cancel
          </SecundaryButton>

          <DangerButton disabled={disabled} clickFunction={handleDelete}>
            <FaTrash /> Delete
          </DangerButton>

        </DeleteLinkModalButtonSection>
        {errorMessage && <DeleteLinkModalTextError>{errorMessage}</DeleteLinkModalTextError>}
      </DeleteLinkModalInformation>

    </DeleteLinkModalWrapper>
  )
}

export default DeleteLinkModal
