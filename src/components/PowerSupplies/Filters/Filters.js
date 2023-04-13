import data from '../../../sources/power-supplies';

import './Filters.css'

function Filters() {
  
  const filtersTitles = Object.keys(data.blocks[0]).filter(item => !(item === 'id' || item === 'Артикул' || item === 'Наименование'));

  const filters = filtersTitles.map(fieldsetTitle => {
    const values = Array.from(new Set(data.blocks.map(item => item[`${fieldsetTitle}`])))
      .sort((a, b) => a - b)
      .map(label => {
        return(
          <label className='filter__label'>
            <input type='checkbox' value={label} className='filter__checkbox' /> 
            {label}
          </label>
        )
      }
    );

    return(
      <fieldset className='fieldset'>
        <legend className='filter__title'>{fieldsetTitle}</legend>
          {values}
      </fieldset>
    )
  }); 

    return(
      <>
        <form className='filter'>
          {filters}
        </form>
      </>
    )
}

export default Filters;