import React, { createContext, useReducer } from 'react'
import { persistLocalStorageUser, clearLocalStorageUser, getLocalStorageUser } from '@/utilities/localStorage'
import { authReducer } from './authReducer'

const initialState = {
  user: getLocalStorageUser() ? getLocalStorageUser() : false
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = (user) => {
    persistLocalStorageUser(user)
    dispatch({
      type: 'LOGIN',
      payload: user
    })
    return user
  }

  const logout = () => {
    clearLocalStorageUser()
    dispatch({ type: 'LOGOUT' })
  }

  return (
        <AuthContext.Provider value={{ login, logout, authState }}>
            {children}
        </AuthContext.Provider>
  )
}
