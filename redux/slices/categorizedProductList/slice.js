import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: '',
  message: '',
  categorizedList: [
    {
      category: 'Isınma',
      products: ['Battaniye', 'Elektrikli battaniye', 'Elektrikli ısıtıcı']
    },
    {
      category: 'Gıda',
      products: ['Bisküvi', 'Konserve']
    }
  ],
  errors: {}
}

export const categorizedProductList = createSlice({
  name: 'categorizedProductList',
  initialState,
  reducers: {}
})

export default categorizedProductList.reducer
