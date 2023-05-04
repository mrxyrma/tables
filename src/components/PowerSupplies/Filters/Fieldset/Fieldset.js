import FilterButton from './FilterButton/FilterButton';

import { useEffect, useState } from 'react';

import './Fieldset.css';

function Fieldset({title, items, selBtns}) {
  const filterButtons = Array.from(new Set(items.map(item => item[`${title}`])))
      .sort((a, b) => a - b)
      .map(label => <FilterButton key={label} label={label}/>);
  
  const [selectedBtns, setSelectedBtns] = useState('');
  
  useEffect(() => {
    selBtns(title, selectedBtns);
  }, [selectedBtns])
  
  return(
    <fieldset className='fieldset' onChange={(e) => setSelectedBtns(Array.from(e.currentTarget.elements).filter(item => item.checked).map(item => item.value))}>
      <legend className='fieldset__title'>{title}</legend>
        {filterButtons}
    </fieldset>
  )
}

export default Fieldset;