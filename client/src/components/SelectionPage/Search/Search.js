import './Search.css'

function Search({data, setItems, inputValue, setInputValue}) {
  const searching = (e) => {
    document.querySelectorAll('input:checked').forEach(item => item.checked = false)
    setInputValue(e.target.value)
    const foundItems = data.filter(item => (String(item.Артикул).toUpperCase().includes(inputValue) || String(item.Наименование).toUpperCase().includes(e.target.value.toUpperCase())))
    setItems(foundItems)
  }

  return(
    <div className='search'>
      <input 
        className='search_input'
        type='input'
        placeholder='Поиск по артикулу или наименованию'
        onChange={searching}
        value={inputValue}
      />
    </div>
    
  )
}

export default Search