import axios from 'axios'
import { getLocalStorageUser } from '@/utilities'

import { config } from '@/config/config'

const baseUrl = config.BASE_URL_API

const { token } = getLocalStorageUser()

export const getLinksApiEndPoint = async ({ page = 1, limit = 4, trackName = '' }) => {
  try {
    const response = await axios.get(`${baseUrl}/links?page=${page}&limit=${limit}&track=${trackName}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (err) {
    if (err.response.data.code === 401) {
      localStorage.removeItem('user')
      return window.location.reload()
    }
    return err.response.data
  }
}

export const getLinkApiEndPoint = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/links/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (err) {
    if (err.response.data.code === 401) {
      localStorage.removeItem('user')
      return window.location.reload()
    }
    return err.response.data
  }
}

export const deleteLinkApiEndPoint = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/links/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (err) {
    if (err.response.data.code === 401) {
      localStorage.removeItem('user')
      return window.location.reload()
    }
    return err.response.data
  }
}

export const getLinkSlugApiEndPoint = async (slug) => {
  try {
    const response = await axios.get(`${baseUrl}/public/${slug}`)
    return response.data
  } catch (err) {
    return err.response.data
  }
}
