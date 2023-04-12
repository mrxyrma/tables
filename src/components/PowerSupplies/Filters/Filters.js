import data from '../../../sources/power-supplies';

import './Filters.css'

function Filters() {
  
  const filtersTitles = ['Бренд', 
              'Количество фаз на входе', 
              'Номинальное выходное напряжение Uн, В DC',
              'Номинальная мощность Pн, Вт',
              'Номинальный ток Iн, А',
              'Тип монтажа',
              'Форм-фактор',
              'Регулировка напряжения',
              'Наличие контакта DC OK'];

  const brand = Array.from(new Set(data.blocks.map(item => item.brand))).sort().map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox' /> {item}
    </label>
    )
  });

  const phase = Array.from(new Set(data.blocks.map(item => item.phase))).sort().map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });

  const voltage = Array.from(new Set(data.blocks.map(item => item.voltage))).sort((a, b) => a - b).map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });

  const power = Array.from(new Set(data.blocks.map(item => item.power))).sort((a, b) => a - b).map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });

  const current = Array.from(new Set(data.blocks.map(item => item.current))).sort((a, b) => a - b).map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });

  const type = Array.from(new Set(data.blocks.map(item => item.type))).sort().map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });

  const formFactor = Array.from(new Set(data.blocks.map(item => item.formFactor))).sort().map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });

  const voltageAdj = Array.from(new Set(data.blocks.map(item => item.voltageAdj))).sort().map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });

  const dcOk = Array.from(new Set(data.blocks.map(item => item.dcOk))).sort().map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });

  
 
     return(
      <>
        <form className='filter'>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[0]}</legend>
            {brand}
          </fieldset>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[1]}</legend>
            {phase}
          </fieldset>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[2]}</legend>
            {voltage}
          </fieldset>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[3]}</legend>
            {power}
          </fieldset>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[4]}</legend>
            {current}
          </fieldset>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[5]}</legend>
            {type}
          </fieldset>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[6]}</legend>
            {formFactor}
          </fieldset>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[7]}</legend>
            {voltageAdj}
          </fieldset>
          <fieldset className='fieldset'>
          <legend className='filter__title'>{filtersTitles[8]}</legend>
            {dcOk}
          </fieldset>
        </form>
      </>
    )
}

export default Filters;