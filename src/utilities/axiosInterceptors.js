import axios from 'axios'

export const axiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      return error.response.data
    }
  )
}
