import Fieldset from './Fieldset/Fieldset';

import './Filters.css'

function Filters({data, items, setItems}) {
  let arrayWithFilters = []
  
  const fieldsetTitles = Object.keys(data[0]).filter(item => !(item === 'id' || item === 'Артикул' || item === 'Наименование'))

  fieldsetTitles.forEach((item, index) => {
    const obj = {}
    obj[item] = ['Empty array']
    arrayWithFilters[index] = obj
  })

  function getSelectedBtns(objectWithFieldset) {
    const index = fieldsetTitles.indexOf(Object.keys(objectWithFieldset)[0])
    arrayWithFilters[index] = objectWithFieldset
    console.log(arrayWithFilters)
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
    items.filter(item => {
      //нужно пройтись по каждому свойству отдельной позиции (item) и проверить есть ли её значение в arrayWithFilters
      fieldsetTitles.forEach(fieldsetTitle => {
        arrayWithFilters.includes(item[fieldsetTitle])
        console.log(item[fieldsetTitle])
      })
    })
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