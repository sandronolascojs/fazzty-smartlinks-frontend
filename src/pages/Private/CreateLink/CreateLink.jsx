import React from 'react'
import Navbar from '../../../components/Navbar'

export default function CreateLink () {
  return (
    <>
        <Navbar
        linkOne={'dashboard'}
        linkTwo={'links'}
        linkThree={'stats'}
        linkFour={'account'}
        method={'logout'}
        />
        <div className='mx-64 py-4'>

        </div>
    </>
  )
}
