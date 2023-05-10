import Fieldset from './Fieldset/Fieldset';

import './Filters.css'

function Filters({data, items, setItems}) {
  
  const fieldsetTitles = Object.keys(data[0]).filter(item => !(item === 'id' || item === 'Артикул' || item === 'Наименование'));

  const fieldsets = fieldsetTitles.map(fieldsetTitle => 
    <Fieldset
      key={fieldsetTitle}
      title={fieldsetTitle}
      data={data}
      getSelectedBtns={getSelectedBtns}
    />
    )

    let arrayWithFilters = []

    function getSelectedBtns(objectWithFieldset) {
      if(!arrayWithFilters.length) {
        arrayWithFilters = [...arrayWithFilters, objectWithFieldset]
      } else {
        const keys = []
        arrayWithFilters.forEach((item) => keys.push(Object.keys(item)[0]))
        if(keys.includes(Object.keys(objectWithFieldset)[0])){
          const index = keys.indexOf(Object.keys(objectWithFieldset)[0])
          arrayWithFilters[index] = objectWithFieldset
        } else {
          arrayWithFilters = [...arrayWithFilters, objectWithFieldset]
        }
      }
    }

    function settingItems(e) {
      e.preventDefault()
      arrayWithFilters.forEach(fieldset => {
        const i = data.filter(item => fieldset[Object.keys(fieldset)[0]].includes(item[Object.keys(fieldset)[0]]))
        setItems(i)
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