import React from 'react'

export default function PrincipalButton ({ children, onClick }) {
  return (
    <button className='
    text-white
    bg-sky-600
    hover:bg-sky-800
    focus:ring-4
    focus:outline-none
    focus:ring-blue-300
    font-medium
    rounded-lg
    text-base
    w-full
    sm:w-auto
    px-5
    py-2
    text-center
    '
    onClick={onClick}>{children}</button>
  )
}
