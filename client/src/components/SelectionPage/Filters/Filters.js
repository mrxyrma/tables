import { memo } from 'react';
import Fieldset from './Fieldset/Fieldset';

import './Filters.css'

function Filters({data, setItems}) {
  let arrayWithFilters = []
  
  const fieldsetTitles = Object.keys(data[0]).filter(item => !(item === '_id' || item === 'Артикул' || item === 'Наименование' || item === 'src'))

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

    const filteredItems = data.filter(item => {
    
      const arrWithValues = [] //массив со значеними отдельного item
      fieldsetTitles.forEach(fieldsetTitle => {
        arrWithValues.push(item[fieldsetTitle])
      })

      return arrWithValues.every((arrItem, index) => arrayWithFilters[index][Object.keys(arrayWithFilters[index])[0]].includes(arrItem))

    })
    setItems(filteredItems)
    document.querySelector('.table').scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  
  return(
    <aside className='filters'>
        <h2 className='subtitle'>Фильтры:</h2>
        <form className='filter'>
          {fieldsets}
          <button className='filters__button' onClick={settingItems}>Подобрать!</button>
        </form>
    </aside>
  )
}

export default memo(Filters);