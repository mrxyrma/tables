import FilterButton from './FilterButton/FilterButton';

import { useState, useEffect } from 'react';
import './Fieldset.css';

function Fieldset({title, items}) {
  const filterButtons = Array.from(new Set(items.map(item => item[`${title}`])))
      .sort((a, b) => a - b)
      .map(label => <FilterButton key={label} label={label}/>);
  
  const [selectedBtns, setSelectedBtns] = useState('');
  
  const visibleData = (e) => {
    setSelectedBtns(Array.from(e.currentTarget.elements).filter(item => item.checked).map(item => item.value));
  }
  
  useEffect(() => {
    const visible = items.filter(item => selectedBtns.includes(item[`${title}`]));
  })

  return(
    <fieldset className='fieldset' onChange={visibleData} name={title}>
      <legend className='fieldset__title'>{title}</legend>
        {filterButtons}
    </fieldset>
  )
}

export default Fieldset;