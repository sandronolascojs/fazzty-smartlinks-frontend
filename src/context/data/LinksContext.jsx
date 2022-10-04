import React, { createContext, useReducer } from 'react'
import { linksReducer } from './linksReducer'

const initialState = {
  links: []
}

export const LinksContext = createContext(initialState)

export const LinksProvider = ({ children }) => {
  const [linksState, dispatch] = useReducer(linksReducer, initialState)

  const addLink = (link) => {
    dispatch({ type: 'ADD_LINK', payload: link })
  }
  const deleteLink = (link) => {
    dispatch({ type: 'DELETE_LINK', payload: link })
  }
  const updateLink = (link) => {
    dispatch({ type: 'UPDATE_LINK', payload: link })
  }
  const getLinks = (links) => {
    try {
      dispatch({ type: 'GET_LINKS', payload: links })
    } catch (err) {
      return err
    }
  }
  return (
        <LinksContext.Provider value={{ addLink, deleteLink, updateLink, getLinks, linksState }}>
            {children}
        </LinksContext.Provider>
  )
}
