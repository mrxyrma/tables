import Fieldset from './Fieldset/Fieldset';

import './Filters.css'

function Filters({items, setItems}) {
  
  const fieldsetTitles = Object.keys(items[0]).filter(item => !(item === 'id' || item === 'Артикул' || item === 'Наименование'));

  const fieldsets = fieldsetTitles.map(fieldsetTitle => 
    <Fieldset
      key={fieldsetTitle}
      title={fieldsetTitle}
      items={items}
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

    return(
      <aside className='filters'>
          <h2 className='subtitle'>Фильтры:</h2>
          <form className='filter'>
            {fieldsets}
          </form>
      </aside>
    )
}

export default Filters;