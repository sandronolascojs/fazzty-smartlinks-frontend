import axios from 'axios'
import { getLocalStorageUser } from '../utilities'

const baseUrl = 'http://localhost:3500/api/v1'

const { token } = getLocalStorageUser()

export const getLinksApiEndPoint = async () => {
  try {
    const response = await axios.get(`${baseUrl}/links`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (err) {
    return err
  }
}

export const getLinksPopularEndpoint = async () => {
  try {
    const response = await axios.get(`${baseUrl}/search`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (err) {
    return err
  }
}
