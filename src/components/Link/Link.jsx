import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Link ({ children, href }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate(href)
  }
  return (
    <a onClick={handleClick} className='font-bold text-zinc-800 cursor-pointer'>{children}</a>
  )
}
