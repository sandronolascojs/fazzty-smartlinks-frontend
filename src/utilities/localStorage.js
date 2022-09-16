export const persistLocalStorageUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getLocalStorageUser = () => {
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
}

export const clearLocalStorageUser = () => {
  localStorage.removeItem('user')
}
