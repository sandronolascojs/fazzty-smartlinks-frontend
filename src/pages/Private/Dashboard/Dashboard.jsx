import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../../../components/Navbar/Navbar.jsx'
import { loadLinks } from '../../../context/data/linksSlice.js'
import { getLinksApiEndPoint } from '../../../services/links.services.js'

export default function Dashboard () {
  const fistLoad = async (page) => {
    try {
      const response = await getLinksApiEndPoint(page)
      const links = response.data
      useDispatch(loadLinks(links))
    } catch (e) {
      console.log(e)
    }
  }
  const page = 1

  useEffect(() => {
    const load = async () => {
      await fistLoad(page)
    }
    document.title = 'Fazzty - Dashboard'
    load()
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
