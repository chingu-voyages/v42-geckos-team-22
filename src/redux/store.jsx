import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../redux/slices/testSlice'

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
})

