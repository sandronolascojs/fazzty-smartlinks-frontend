import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetLink from '../../../hooks/useGetLink'
import Navbar from '../../../components/Navbar'
import CardAudioPlayer from '../../../components/CardAudioPlayer'
import VisitsCharts from '../../../components/VisitsCharts'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Modal from '../../../components/Modal/Modal'

import { useDisableInput } from '@/hooks/useDisableInput'
import { useHandleModal } from '@/hooks/useHandleModal'
import DeleteLinkModal from '@/components/DeleteLinkModal/DeleteLinkModal'

export default function EditLinks () {
  const [newLink, setNewLink] = useState('')

  const { id } = useParams()

  // hooks

  const { disableInput, handleDisableInput } = useDisableInput()
  const { openModal, handleCloseModal, handleOpenModal } = useHandleModal()
  const { link, loading, error } = useGetLink({ id })

  const handleChange = (e) => {
    setNewLink({ ...link, [e.target.name]: e.target.value })
  }

  const handleAddLink = (e) => {
    e.preventDefault()
    const links = [...newLink.links, {
      name: `New Link ${newLink.links.length + 1}`,
      url: 'https://www.fazzty.com',
      visible: true
    }]

    const handleRemoveLink = (index) => {
      const links = [...newLink.links]
      links.splice(index, 1)
      setNewLink({ ...newLink, links })
    }

    setNewLink({ ...newLink, links })
  }

  useEffect(() => {
    setNewLink(link)
  }, [link])

  if (error) {
    return (
      <>
      <Navbar />

      {error === 'Link not found'
        ? <h1 className='text-3xl mt-28 font-bold text-center text-gray-700'>Link not found</h1>
        : <div className='mx-64 py-12'>
        <h1 className='text-3xl font-bold text-center text-gray-700'>
          {error}
        </h1>
      </div>
    }

      </>
    )
  }

  return (
      <>
      <Navbar />
      <div className='mx-64 py-12'>
            {loading
              ? <p>Loading...</p>
              : <div>
                  <h1 className='text-2xl font-black text-zinc-800'>Edit Link</h1>
                  <section className='py-6 flex w-full justify-between items-center'>
                        <div className='flex flex-3 flex-col gap-4 w-[275px] justify-start items-start'>
                        <img src={link.images.spotify || link.images.deezer} alt={link.name} className='w-64 h-64 object-cover'/>
                          <div className='grid grid-cols-1 gap-2'>
                            <label className='font-black text-zinc-800 text-2xl'>{link.name}</label>
                            <span className='font-medium text-zinc-800 truncate'>{link.artists.join(', ')}</span>
                          </div>
                          <CardAudioPlayer preview={link.previewUrl.spotify || link.previewUrl.deezer || link.previewUrl.napster} />
                          <div className='flex w-fit flex-col gap-2'>
                            <div className='flex py-4 gap-2'>
                              <span className='text-sm text-zinc-800 font-semibold bg-zinc-200 py-2 px-3 rounded-md'>{link.visits.length} Visits</span>
                              <span onClick={handleOpenModal} className='flex items-center justify-center gap-1 text-sm text-white font-semibold cursor-pointer bg-red-600 py-2 px-3 rounded-md hover:bg-red-700 ease-in-out duration-150'><FaTrash /> Delete Link</span>
                              {openModal
                                ? <Modal>
                                <DeleteLinkModal images={link.images.spotify || link.images.deezer} id={link._id} closeModal={handleCloseModal} />
                              </Modal>
                                : null}
                            </div>
                          </div>
                        </div>
                        <div className='bg-gray-50 flex flex-1 z-0 mx-10 my-18 h-84 items-center justify-center py-6 opacity-90 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px]'>
                          <div className='h-full w-full px-12'>
                            <VisitsCharts track={link.visits} />
                          </div>
                        </div>
                      </section>
                      <div className='w-full  pb-0.5 my-8 bg-zinc-200'></div>
                      <section>
                        <p className='text-2xl font-black text-zinc-800'>Link Metadata</p>
                        <div className='py-6'>
                            <form className='grid grid-cols-1'>
                              <div>
                                <label className="block mb-2 text-base font-bold text-zinc-600 text-left">Track Name</label>
                                <div className="relative mb-6">
                                    <input onChange={handleChange} disabled={disableInput} defaultValue={link.name} type="text" id="name" name='name' className="bg-zinc-100 border font-semibold border-gray-100 disabled:text-zinc-300 text-zinc-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5" placeholder="Track name"/>
                                  <div className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer">
                                    <button onClick={handleDisableInput}>
                                      <FaEdit className='text-zinc-400' />
                                    </button>
                                  </div>
                                </div>

                              </div>
                            </form>
                        </div>
                      </section>
                </div>
        }
      </div>
    </>
  )
}
