import { useContext } from 'react'

import { LinksContext } from '../context/data/LinksContext'

export const useLinksContext = () => {
  const { addLink, deleteLink, updateLink, getLinks, linksState } = useContext(LinksContext)
  return { addLink, deleteLink, updateLink, getLinks, linksState }
}
