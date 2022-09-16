import React, { createContext, useReducer } from 'react'
import { authLogin } from '../../services/auth.services'
import { persistLocalStorageUser, clearLocalStorageUser, getLocalStorageUser } from '../../utilities'
import { authReducer } from './authReducer'

const initialState = {
  user: getLocalStorageUser() ? getLocalStorageUser() : false
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = async ({ email, password }) => {
    const response = await authLogin({ email, password })

    const user = response.data.data
    if (user) {
      persistLocalStorageUser(user)
      dispatch({
        type: 'LOGIN',
        payload: user
      })
      return { user }
    } else if (response.response.data.error) {
      return response.response.data
    }
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
