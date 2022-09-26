import axios from 'axios'
import { getLocalStorageUser } from '../utilities'

const baseUrl = 'http://localhost:3500/api/v1'

const { token } = getLocalStorageUser()

export const getLinksApiEndPoint = async (page) => {
  try {
    const response = await axios.get(`${baseUrl}/links?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (err) {
    return err
  }
}

export const getLinkSlugApiEndPoint = async (slug) => {
  try {
    const response = await axios.get(`${baseUrl}/public/${slug}`)
    return response.data
  } catch (err) {
    return err
  }
}
