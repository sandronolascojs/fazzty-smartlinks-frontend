import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SecundaryButton ({ children, route }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${route}`)
  }
  return (
    <button className='
    text-zinc-800
    bg-neutral-200
    hover:bg-sky-800
    hover:text-white
    focus:ring-4
    focus:outline-none
    focus:ring-blue-300
    font-semibold
    rounded-lg
    text-base
    w-full
    sm:w-auto
    px-5
    py-2
    text-center
    '
    onClick={handleClick}>{children}</button>
  )
}
