import { memo } from 'react';
import Fieldset from './Fieldset/Fieldset';

import './Filters.css'

function Filters({data, setItems}) {
  const ignoreTitles = ['_id', 'Артикул', 'Наименование', 'src', 'Серия', 'Примечание'] //Список полей таблицы, которые игнорируются в филдсетах
  const fieldsetTitles = Object.keys(data[0]).filter(item => !ignoreTitles.includes(item)) //Массив с заголовками филдсетов (шапка таблицы)

  let arrayWithFilters = [] //Каждый элемент - это объект, где ключ - название филдсета, а значение - массив с уникальными значениями
  fieldsetTitles.forEach((fieldsetTitle, index) => {
    const obj = {}
    obj[fieldsetTitle] = Array.from(new Set(data.map(item => item[`${fieldsetTitle}`]))) //Объект с филдсетами в формате {Бренд: [КЭАЗ, Lovato...]} 
    arrayWithFilters[index] = obj
  })

  function getSelectedBtns(objectWithFieldset) {
    const index = fieldsetTitles.indexOf(Object.keys(objectWithFieldset)[0])
    arrayWithFilters[index] = objectWithFieldset
  }

  const fieldsets = fieldsetTitles.map((fieldsetTitle, index) =>
      <Fieldset
        key={fieldsetTitle}
        title={fieldsetTitle}
        values={arrayWithFilters[index][fieldsetTitle]}
        getSelectedBtns={getSelectedBtns}
      />
  )

  function settingItems(e) {
    e.preventDefault()

    const filteredItems = data.filter(item => {
    
      const arrWithValues = [] //массив со значеними каждой отдельной позиции из таблицы

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