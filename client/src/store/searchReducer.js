import { createSlice } from '@reduxjs/toolkit'

const searchReducer = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
  },
})

export const { setSearchValue } = searchReducer.actions
export default searchReducer.reducer
