import { configureStore } from '@reduxjs/toolkit'
import visibleItemsReducer from './visibleItemsReducer'

const store = configureStore({
  reducer: {
    visibleItems: visibleItemsReducer,
  },
})

export default store
