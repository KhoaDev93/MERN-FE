import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './features/productSlice'

export const store = configureStore({
  reducer: { productListReducer },
})
