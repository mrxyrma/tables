import FilterButton from './FilterButton/FilterButton';

import './Fieldset.css';

function Fieldset({title, items}) {
  const filterButtons = Array.from(new Set(items.map(item => item[`${title}`])))
      .sort((a, b) => a - b)
      .map(label => <FilterButton label={label}/>);

  return(
    <fieldset className='fieldset'>
      <legend className='fieldset__title'>{title}</legend>
        {filterButtons}
    </fieldset>
  )
}

export default Fieldset;