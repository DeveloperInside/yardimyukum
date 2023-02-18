import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  message: '',
  delivery: {
    license_plate: '',
    delivery_code: '',
    delivery_status: '',
    load_list: [],
    delivery_info: {
      driver_name: '',
      driver_contact: '',
      disributor: '',
      disributor_contact: '',
      recipient_name: '',
      recipient_organization: '',
      recipient_contact: ''
    }
  },
  errors: {}
}

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {}
})

export default deliverySlice.reducer
