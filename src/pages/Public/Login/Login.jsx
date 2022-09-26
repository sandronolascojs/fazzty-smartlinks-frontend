import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthContext from '../../../hooks/useAuthContext'

import Link from '../../../components/Link'
import PrincipalButton from '../../../components/PrincipalButton'

export default function Login () {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    setError(null)
    setData({ ...data, [target.name]: target.value })
  }

  const { login } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = data
    setError(null)
    if (!email || !password) {
      setError('Please fill all fields')
    }
    const response = await login(data)
    if (response.error) {
      setError(response.message)
    }
    navigate('/dashboard')
  }

  document.title = 'Fazzty - Login'

  return (
        <main className='flex flex-auto'>

          <section className='flex flex-1 items-center justify-center h-screen'>
            <img className='w-full h-full object-none relative' src='images/background-shapes.png'/>
            <div className='absolute'>
              <div className='flex justify-start items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-16 h-16 text-zinc-800' fill='currentColor' viewBox="0 0 512 512"><g id="Thunder"><path d="M366.56,234.0073a12.7668,12.7668,0,0,0-11.753-7.5747H296.9443L331.3965,94.6015a14.0681,14.0681,0,0,0-24.1944-12.8252L147.4844,264.1606a12.905,12.905,0,0,0,9.709,21.4067h57.8623L180.6035,417.3984a13.8446,13.8446,0,0,0,7.0225,15.9868,14.2368,14.2368,0,0,0,6.68,1.6924,13.8939,13.8939,0,0,0,10.4922-4.854L364.5156,247.8393A12.7656,12.7656,0,0,0,366.56,234.0073Z"/></g></svg>
                <p className='text-5xl font-black text-zinc-800'>Fazzty</p>
              </div>
              <p className='text-sm font-medium pt-1 text-zinc-500'>Making Smart Links never was that easy!</p>
            </div>
          </section>

          <section className='flex flex-1 flex-col items-center justify-center h-screen bg-zinc-900'>

            <div className='items-start justify-start pb-6 z-10'>
              <p className='text-4xl font-black text-zinc-100'>Welcome Back!</p>
              <p className='text-sm font-medium pt-1 text-zinc-400'>Login to your account</p>
            </div>

            <form className='flex flex-col  rounded-md bg-zinc-200 py-10 px-6 text-center' onSubmit={handleSubmit}>

              <p className='font-black text-2xl pb-4'>Login</p>

              <label className="block mb-2 text-base font-bold text-zinc-600 text-left">Email</label>
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input onChange={handleChange} type="email" id="email" name='email' className="bg-zinc-100 border border-gray-100 text-zinc-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="mail@mail.com"/>
              </div>

              <label className="block mb-2 text-base font-bold text-zinc-600 text-left">Password</label>
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-zinc-400" fill="currentColor" version="1.1" id="Layer_1" x="0px" y="0px"
                  viewBox="0 0 56.3 68.1" enableBackground="new 0 0 56.3 68.1">
                  <path d="M48.4,27.6h-1.5v-6.9c0-10.3-8.3-18.7-18.6-18.7C18,1.9,9.6,10.3,9.6,20.7v6.9H8.1c-3.1,0-5.7,2.6-5.7,5.7
                    v27.1c0,3.2,2.5,5.7,5.7,5.7h40.3c3.1,0,5.7-2.6,5.7-5.7V33.3C54,30.1,51.5,27.6,48.4,27.6z M30.6,47.2v3.5c0,0.5-0.4,1-1,1h-2.8
                    c-0.5,0-0.9-0.4-0.9-1v-3.5c-1.3-0.8-2.2-2.2-2.2-3.9c0-2.5,2-4.6,4.5-4.6c2.5,0,4.5,2,4.5,4.6C32.8,45,31.9,46.4,30.6,47.2z
                    M38.7,27.6H17.8v-6.9c0-5.8,4.7-10.5,10.4-10.5c5.8,0,10.4,4.7,10.4,10.5V27.6z"/>
                  </svg>
                </div>
                <input onChange={handleChange} type="password" id="password" name='password' className="bg-zinc-100 border border-gray-100 text-zinc-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Password"/>
              </div>

              <PrincipalButton>Login</PrincipalButton>

              {error
                ? <div className='pt-4'>
                    <div className='text-white text-xs rounded-md bg-rose-500 font-medium py-3 px-3'>
                      <p>{error}</p>
                    </div>
                </div>
                : null
              }

              <label className='text-base font-medium py-4'>
                or <Link href={'/reset-password'}>
                  <span className='text-sky-600 font-medium'>Forgot Password</span>
                  </Link>
              </label>

              <label className='text-base font-medium pt-4'>
                  Don&apos;t have an Account? <Link>
                  <span className='text-sky-600'>Sign Up</span>
                  </Link>
              </label>

            </form>
          </section>
        </main>
  )
}
