import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../pages/public/Error404'

export default function RoutesWithNotFound ({ children }) {
  return (
    <Routes>
        {children}
        <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
