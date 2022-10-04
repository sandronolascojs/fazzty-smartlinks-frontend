import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar.jsx'

export default function Dashboard () {
  useEffect(() => {
    document.title = 'Fazzty - Dashboard'
  }, [])
  return (
        <>
        <Navbar
        linkOne={'dashboard'}
        linkTwo={'links'}
        linkThree={'stats'}
        linkFour={'account'}
        method={'logout'}
        />
          <div className='flex flex-wrap justify-center gap-8 mx-64 py-8'>

          </div>
        </>
  )
}
