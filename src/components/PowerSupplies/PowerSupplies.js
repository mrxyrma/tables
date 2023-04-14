import { useState } from 'react';

import Filters from './Filters/Filters';
import Table from './Table/Table';

import './PowerSupplies.css';

function PowerSupplies() {

  const [selectedFilters, setSelectedFilters] = useState('');
  
  function selected() {
    const fieldests = document.querySelectorAll('.fieldset');
    
    setSelectedFilters(Array.from(fieldests).map(fieldset => {
      return Array.from(fieldset.elements).filter(elem => elem.checked).map(item => item.value);
    })
    )
  }

  return(
    <>
      <h1 className='title'>Подбор источников питания</h1>
      <div className="table-page__content">
        <aside className='filters'>
          <h2 className='subtitle'>Фильтры:</h2>
          <button onClick={selected}>Click me!</button>
          <Filters />
        </aside>
        <Table />
      </div>
    </>
  )
}

export default PowerSupplies;