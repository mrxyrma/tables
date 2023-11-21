import { configureStore } from '@reduxjs/toolkit'
import visibleItemsReducer from './visibleItemsReducer'
import searchReducer from "./searchReducer";

const store = configureStore({
  reducer: {
    visibleItems: visibleItemsReducer,
    searchValue: searchReducer
  },
})

export default store
