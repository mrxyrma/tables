import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../store/searchReducer'
import { setVisibleItems } from '../../store/visibleItemsReducer'

import './Search.css'

function Search() {
  const dispatch = useDispatch()
  const allItems = useSelector((state) => state.visibleItems.allItems)
  const searchValue = useSelector((state) => state.searchValue.searchValue)

  const searching = (e) => {
    document.querySelectorAll('input:checked').forEach((item) => (item.checked = false))
    dispatch(setSearchValue(e.target.value))
    const foundItems = allItems.filter(
      (item) =>
        String(item.Артикул).toUpperCase().includes(e.target.value.toUpperCase()) ||
        String(item.Наименование).toUpperCase().includes(e.target.value.toUpperCase())
    )
    dispatch(setVisibleItems(foundItems))
  }

  return (
    <div className='search'>
      <input
        className='search_input'
        type='search'
        placeholder='Поиск по артикулу или наименованию'
        onChange={searching}
        value={searchValue}
      />
    </div>
  )
}

export default Search
