import { useContext } from 'react'
import { AuthContext } from '../context/auth/authContext'

export default function useAuthContext () {
  const { login, logout, authState } = useContext(AuthContext)
  return { login, logout, authState }
}
