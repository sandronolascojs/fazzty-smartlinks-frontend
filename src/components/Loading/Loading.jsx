import React from 'react'
import { RiseLoader } from 'react-spinners'

export default function Loading () {
  return (
    <div className='fixed top-2/4 items-center justify-center h-screen'>
        <RiseLoader color='#18181B' />
    </div>
  )
}
