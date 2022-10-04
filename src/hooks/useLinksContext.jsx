import { useContext } from 'react'
import { LinksContext } from '../context/data/LinksContext'

export default function useLinksContext () {
  const { addLink, deleteLink, updateLink, getLinks, linksState } = useContext(LinksContext)
  return { addLink, deleteLink, updateLink, getLinks, linksState }
}
