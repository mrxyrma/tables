import FilterButton from './FilterButton/FilterButton'

import './Fieldset.css'

function Fieldset({ title, values, getSelectedBtns }) {
  const pureArr = values.filter((item) => typeof item !== 'undefined') //Массив значений без незаполненных ячеек таблицы
  let sortedValues
  if (pureArr.every((item) => typeof item === 'string')) {
    sortedValues = pureArr.sort().map((label) => (
      <FilterButton
        key={label}
        label={label}
        title={title}
      />
    ))
  } else {
    sortedValues = pureArr
      .sort((a, b) => a - b)
      .map((label) => (
        <FilterButton
          key={label}
          label={label}
          title={title}
        />
      ))
  }

  function takeSelectedBtns(e) {
    const makeCorrectFormat = (item) => {
      let correctFormatValue = Number(item.value)
      if (correctFormatValue === 0) return undefined
      if (String(correctFormatValue) === 'NaN') correctFormatValue = item.value
      return correctFormatValue
    }

    let selectedBtns = Array.from(e.currentTarget.elements)
      .filter((item) => item.checked)
      .map(makeCorrectFormat)

    if (!selectedBtns.length) {
      selectedBtns = values
    }

    const objectWithFieldset = {}
    objectWithFieldset[title] = selectedBtns
    getSelectedBtns(objectWithFieldset)
  }

  return (
    <fieldset
      className='fieldset'
      onChange={takeSelectedBtns}
    >
      <legend className='fieldset__title'>{title}</legend>
      {sortedValues}
    </fieldset>
  )
}

export default Fieldset
