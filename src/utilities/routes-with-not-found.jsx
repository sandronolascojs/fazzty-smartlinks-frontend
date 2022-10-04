import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Error404 = React.lazy(() => ('../pages/public/Error404'))

export default function RoutesWithNotFound ({ children }) {
  return (
    <Routes>
        {children}
        <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
