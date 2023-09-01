import './Search.css'

function Search({data, setItems}) {
  const searchByOrderNum = (e) => {
    const inputValue = e.target.value.toUpperCase()
    const foundItems = data.filter(item => (String(item.Артикул).toUpperCase().includes(inputValue) || String(item.Наименование).toUpperCase().includes(inputValue)))
    setItems(foundItems)
  }

  return(
    <div className='search'>
      <input 
        className='search_input'
        type='input'
        placeholder='Поиск по артикулу или наименованию'
        onChange={searchByOrderNum}
      />
    </div>
    
  )
}

export default Search