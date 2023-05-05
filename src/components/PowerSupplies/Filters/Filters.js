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

    const selectedBtns = {}

    function getSelectedBtns(fieldsetTitle, value) {
      selectedBtns[fieldsetTitle] = value;
      console.log(selectedBtns);
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