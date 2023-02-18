import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  message: '',
  loadList: [],
  errors: {}
}

export const loadListSlice = createSlice({
  name: 'loadList',
  initialState,
  reducers: {}
})

export default loadListSlice.reducer
