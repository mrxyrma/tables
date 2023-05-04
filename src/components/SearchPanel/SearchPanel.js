import './SearchPanel.css'

function SearchPanel({searchQuery, setSearchQuery}) {

  return(
    <input 
        type='text'
        placeholder='Поиск по артикулу'
        className='search-panel'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
    />
  )
}

export default SearchPanel;