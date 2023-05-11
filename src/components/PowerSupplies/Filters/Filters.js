import Fieldset from './Fieldset/Fieldset';

import './Filters.css'

function Filters({data, items, setItems}) {
  let arrayWithFilters = []
  
  const fieldsetTitles = Object.keys(data[0]).filter(item => !(item === 'id' || item === 'Артикул' || item === 'Наименование'))

  fieldsetTitles.forEach((fieldsetTitle, index) => {
    const obj = {}
    obj[fieldsetTitle] = Array.from(new Set(data.map(item => item[`${fieldsetTitle}`])))
    arrayWithFilters[index] = obj
  })

  function getSelectedBtns(objectWithFieldset) {
    const index = fieldsetTitles.indexOf(Object.keys(objectWithFieldset)[0])
    arrayWithFilters[index] = objectWithFieldset
  }

  const fieldsets = fieldsetTitles.map(fieldsetTitle =>
    <Fieldset
      key={fieldsetTitle}
      title={fieldsetTitle}
      data={data}
      getSelectedBtns={getSelectedBtns}
    />
  )

  function settingItems(e) {
    e.preventDefault()
    const filteredItems = items.filter(item => {
    
    const arrWithValues = []
    fieldsetTitles.forEach(fieldsetTitle => {
      arrWithValues.push(item[fieldsetTitle])
    })

     })

    console.log(filteredItems);
    
  }

  return(
    <aside className='filters'>
        <h2 className='subtitle'>Фильтры:</h2>
        <form className='filter'>
          {fieldsets}
          <button onClick={settingItems}>Подобрать!</button>
        </form>
    </aside>
  )
}

export default Filters;