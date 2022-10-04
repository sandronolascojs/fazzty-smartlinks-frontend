import axios from 'axios'

import { config } from '@/config/config'

const baseUrl = config.BASE_URL_API

export const authLogin = async ({ email, password }) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, { email, password })
    return response.data
  } catch (err) {
    return err.response.data
  }
}
