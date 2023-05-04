import Fieldset from './Fieldset/Fieldset';

import './Filters.css'

function Filters({items}) {
  
  const fieldsetTitles = Object.keys(items[0]).filter(item => !(item === 'id' || item === 'Артикул' || item === 'Наименование'));

  const fieldsets = fieldsetTitles.map(fieldsetTitle => 
    <Fieldset
      key={fieldsetTitle}
      title={fieldsetTitle}
      items={items}
      selBtns={selBtns}
    />
    )

    let arr = {};

    function selBtns(fieldsetTitle, value) {
      arr[fieldsetTitle] = value;
      console.log(arr);
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