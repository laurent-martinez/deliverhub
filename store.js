import { configureStore } from '@reduxjs/toolkit'
import basketSliceReducer from './slices/basketSlice'
import restaurantSliceReducer from './slices/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket: basketSliceReducer,
    restaurant: restaurantSliceReducer,
  },
})