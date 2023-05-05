import FilterButton from './FilterButton/FilterButton';

import './Fieldset.css';

function Fieldset({title, items, getSelectedBtns}) {
  const filterButtons = Array.from(new Set(items.map(item => item[`${title}`])))
      .sort((a, b) => a - b)
      .map(label => <FilterButton key={label} label={label}/>);
  
  function takeSelectedBtns(e){
    const selectedBtns = Array.from(e.currentTarget.elements).filter(item => item.checked).map(item => item.value)
    getSelectedBtns(title, selectedBtns)
  }
  
  return(
    <fieldset className='fieldset' onChange={takeSelectedBtns}>
      <legend className='fieldset__title'>{title}</legend>
        {filterButtons}
    </fieldset>
  )
}

export default Fieldset;