import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuthContext from '@/hooks/useAuthContext'
import { PublicRoutes } from '@/models/routes'

export const AuthGuard = () => {
  const { authState } = useAuthContext()
  return authState.user.token ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard
