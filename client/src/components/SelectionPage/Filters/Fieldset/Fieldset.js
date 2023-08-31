import FilterButton from './FilterButton/FilterButton';

import './Fieldset.css';

function Fieldset({title, values, getSelectedBtns}) {
  let sortedValues
  if (values.every(item => typeof(item) === 'string')) {
    sortedValues = values.sort().map(label => <FilterButton key={label} label={label}/>)
  } else {
    sortedValues = values.sort((a, b) => a - b).map(label => <FilterButton key={label} label={label}/>)
  }
  
  function takeSelectedBtns(e){
    const makeCorrectFormat = (item) => {
      let correctFormatValue = Number(item.value)
      if(String(correctFormatValue) === 'NaN') {
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
        {sortedValues}
    </fieldset>
  )
}

export default Fieldset