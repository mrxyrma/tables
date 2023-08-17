import FilterButton from './FilterButton/FilterButton';

import './Fieldset.css';

function Fieldset({title, data, getSelectedBtns}) {
  const arrWithValues = Array.from(new Set(data.map(item => item[`${title}`])))
                        .sort((a, b) => a - b)
                        .map(label => <FilterButton key={label} label={label}/>)
  
  // let filterButtons
  // if (arrWithValues.every(item => typeof(item) === 'string')) {
  //   filterButtons = arrWithValues.sort().map(label => <FilterButton key={label} label={label}/>)
  // } else {
  //   filterButtons = arrWithValues.sort((a, b) => a - b).map(label => <FilterButton key={label} label={label}/>)
  // }
  
  function takeSelectedBtns(e){
    let selectedBtns = Array.from(e.currentTarget.elements).filter(item => item.checked).map(item => item.value)
    if(!selectedBtns.length) {
      selectedBtns = Array.from(e.currentTarget.elements).map(item => item.value)
    }
    const objectWithFieldset = {}
    objectWithFieldset[title] = selectedBtns
    getSelectedBtns(objectWithFieldset)
  }
  
  return(
    <fieldset className='fieldset' onChange={takeSelectedBtns}>
      <legend className='fieldset__title'>{title}</legend>
        {arrWithValues}
    </fieldset>
  )
}

export default Fieldset