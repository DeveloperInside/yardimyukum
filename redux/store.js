import { configureStore } from '@reduxjs/toolkit'
import reactotron from 'ReactotronConfig'

export const store = configureStore({
  reducer: {},
  enhancers: [reactotron.createEnhancer()]
})
