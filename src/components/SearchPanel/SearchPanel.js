import './SearchPanel.css'

function SearchPanel({value, setSearch}) {

  return(
    <input 
        type='text'
        placeholder='Поиск артикула'
        className='search-panel'
        value={value}
        onChange={e => setSearch(e.target.value)}
    />
  )
}

export default SearchPanel;