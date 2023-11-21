import { createSlice } from '@reduxjs/toolkit'

const visibleItems = createSlice({
  name: 'visibleItems',
  initialState: {
    visibleItems: [],
    allItems: [],
  },
  reducers: {
    setAllItems(state, action) {
      state.allItems = action.payload
    },
    setVisibleItems(state, action) {
      state.visibleItems = action.payload
    },
  },
})

export const { setAllItems, setVisibleItems } = visibleItems.actions

export default visibleItems.reducer
