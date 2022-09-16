import axios from 'axios'

const baseUrl = 'http://localhost:3500/api/v1/auth'

export const authLogin = async ({ email, password }) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password })
    return response
  } catch (err) {
    return err
  }
}
