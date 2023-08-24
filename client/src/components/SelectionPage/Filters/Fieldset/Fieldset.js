import FilterButton from './FilterButton/FilterButton';

import './Fieldset.css';

function Fieldset({title, data, getSelectedBtns}) {
  
  const arrWithValues = Array.from(new Set(data.map(item => item[`${title}`])))

  let filterButtons
  if (arrWithValues.every(item => typeof(item) === 'string')) {
    filterButtons = arrWithValues.sort().map(label => <FilterButton key={label} label={label}/>)
  } else {
    filterButtons = arrWithValues.sort((a, b) => a - b).map(label => <FilterButton key={label} label={label}/>)
  }
  
  function takeSelectedBtns(e){
    const makeCorrectFormat = (item) => {
      let correctFormatValue = Number(item.value)
      if(String(correctFormatValue) == 'NaN') {
        correctFormatValue = item.value
      }
      return correctFormatValue
    }

    let selectedBtns = Array.from(e.currentTarget.elements).filter(item => item.checked).map(makeCorrectFormat)

    if(!selectedBtns.length) {
      selectedBtns = Array.from(e.currentTarget.elements).map(makeCorrectFormat)
    }

    const objectWithFieldset = {}
    objectWithFieldset[title] = selectedBtns
    getSelectedBtns(objectWithFieldset)
  }
  
  return(
    <fieldset className='fieldset' onChange={takeSelectedBtns}>
      <legend className='fieldset__title'>{title}</legend>
        {filterButtons}
    </fieldset>
  )
}

export default Fieldset