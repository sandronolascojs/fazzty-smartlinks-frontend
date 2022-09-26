import { createSlice } from '@reduxjs/toolkit'

export const linksSlice = createSlice({
  name: 'links',
  initialState: [],
  reducers: {
    loadLinks: (state, actions) => {
      state.push(actions.payload)
    }
  }
})
export const { loadLinks } = linksSlice.actions
export default linksSlice.reducer
