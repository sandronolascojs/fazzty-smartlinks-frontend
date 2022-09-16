import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext'
import { getLocalStorageUser } from '../../utilities'

import Link from '../Link'
import PrincipalButton from '../PrincipalButton'
import SecundaryButton from '../SecundaryButton'

export default function Navbar ({ linkOne, linkTwo, linkThree, linkFour, method }) {
  const { logout } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    logout()
    navigate('/')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <header className='py-2.5 px-40 justify-between shadow-md bg-gray-100'>
        <div className='flex mx-8 justify-between'>
            <Link href={'/'}>
                <div className='flex align items-center cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-zinc-800' fill='currentColor' viewBox="0 0 512 512"><g id="Thunder"><path d="M366.56,234.0073a12.7668,12.7668,0,0,0-11.753-7.5747H296.9443L331.3965,94.6015a14.0681,14.0681,0,0,0-24.1944-12.8252L147.4844,264.1606a12.905,12.905,0,0,0,9.709,21.4067h57.8623L180.6035,417.3984a13.8446,13.8446,0,0,0,7.0225,15.9868,14.2368,14.2368,0,0,0,6.68,1.6924,13.8939,13.8939,0,0,0,10.4922-4.854L364.5156,247.8393A12.7656,12.7656,0,0,0,366.56,234.0073Z"/></g></svg>
                    <p className='text-2xl font-black text-zinc-800'>Fazzty</p>
                </div>
            </Link>
            <div>
                <ul className='flex gap-6 py-2.5'>
                    <Link href={`/${linkOne}`}>
                        <li>
                            {linkOne[0].toUpperCase() + linkOne.slice(1)}
                        </li>
                    </Link>
                    <Link href={`/${linkTwo}`}>
                        <li>
                            {linkTwo[0].toUpperCase() + linkTwo.slice(1)}
                        </li>
                    </Link>
                    <Link href={`/${linkThree}`}>
                        <li>
                            {linkThree[0].toUpperCase() + linkThree.slice(1)}
                        </li>
                    </Link>
                    <Link href={`/${linkFour}`}>
                        <li>
                            {linkFour[0].toUpperCase() + linkFour.slice(1)}
                        </li>
                    </Link>
                </ul>
            </div>
            <div className='flex gap-2'>
                <div>
                    <PrincipalButton onClick={!getLocalStorageUser() ? handleLogin : handleLogout}>{getLocalStorageUser() ? 'Logout' : 'Login'}</PrincipalButton>
                </div>
                <div>
                    {
                    linkOne === 'home' && getLocalStorageUser()
                      ? <SecundaryButton
                    route={'dashboard'}
                    >
                    Dashboard
                    </SecundaryButton>
                      : null
                    }
                </div>

            </div>

        </div>
    </header>
  )
}
