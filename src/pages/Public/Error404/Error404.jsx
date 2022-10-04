import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import Error404Illustration from '@/components/Error404Illustration'
import PrimaryButton from '@/components/PrimaryButton'

export default function Error404 () {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate('/')
  }

  return (
            <div className='flex flex-col w-screen h-screen items-center justify-center top-0 bottom-0 right-0 left-0 py-16'>
              <p className='text-zinc-800 font-black text-3xl w-96 text-center py-6'>Oops! we can&apos;t found what are you searching</p>
              <Error404Illustration />
               <div className='mt-6'>
                 <PrimaryButton clickFunction={handleGoBack}>
                  Go to home
                 </PrimaryButton>
               </div>
            </div>
  )
}
