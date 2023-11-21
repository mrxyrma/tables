import './FilterButton.css'

function FilterButton({label}) {
  return(
    <label className='filter__label'>
      <input type='checkbox' value={label} className='filter__checkbox' /> 
        {label}
    </label>
  )
}

export default FilterButton;