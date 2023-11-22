import './FilterButton.css'

function FilterButton({ title, label }) {
  return (
    <label className='filter__label'>
      <input
        type='checkbox'
        value={label}
        className='filter__checkbox'
        name={title}
      />
      {label}
    </label>
  )
}

export default FilterButton
