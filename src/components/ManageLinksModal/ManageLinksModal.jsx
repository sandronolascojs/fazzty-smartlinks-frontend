import React from 'react'
import { useHandleModal } from '../../hooks/useHandleModal'

export default function ManageLinksModal ({ links, addLink, removeLink }) {
  const { openModal, handleCloseModal, handleOpenModal } = useHandleModal()

  return (
    <>
        <button onClick={handleOpenModal} className='flex items-center w-full justify-center gap-1 text-sm text-white font-semibold cursor-pointer bg-red-600 py-2 px-3 rounded-md disabled:bg-zinc-400 hover:bg-red-700 ease-in-out duration-150'><FaTrash /> Add links</button>
            {
                openModal &&
                <Modal>

                </Modal>
            }
    </>
  )
}
