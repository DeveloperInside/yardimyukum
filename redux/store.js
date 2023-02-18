import { configureStore } from '@reduxjs/toolkit'
import reactotron from 'ReactotronConfig'
import { categorizedProductListReducer } from './slices/categorizedProductList/slice'
import { deliveryReducer } from './slices/delivery/slice'
import { loadListReducer } from './slices/loadList/slice'

export const store = configureStore({
  reducer: {
    loadList: loadListReducer,
    delivery: deliveryReducer,
    categorizedProductList: categorizedProductListReducer
  },
  enhancers: [reactotron.createEnhancer()]
})
