import data from '../../sources/power-supplies';

import './PowerSupplies.css';

import Table from './Table/Table';

function PowerSupplies() {
  
  const filtersTitles = ['Бренд', 
              'Количество фаз на входе', 
              'Номинальное выходное напряжение Uн, В DC',
              'Номинальная мощность Pн, Вт',
              'Номинальный ток Iн, А',
              'Тип монтажа',
              'Форм-фактор',
              'Регулировка напряжения',
              'Наличие контакта DC OK'];

  const brands = Array.from(new Set(data.blocks.map(item => item.brand))).map(item => {
    return(<label className='filter__label'>
      <input type='checkbox' value={item} className='filter__checkbox'/> {item}
    </label>
    )
  });
 
    const keys = Object.keys(data.blocks[0]).filter(item => {
      return item != 'id' && item != 'vendorCode' && item != 'name';
    });

    const abc = filtersTitles.map(item => {
      return(
        <fieldset className='fieldset'>
          <legend className='filter__title'>{item}</legend>
            {brands}
        </fieldset>
      )
    })


  return(
    <>
      <h1 className='title'>Подбор источников питания</h1>
      <div className="table-page__content">
        <aside className='filters'>
          <h2 className='subtitle'>Фильтры:</h2>

            <form className='filter'>
              {abc}
            </form>
        </aside>
        <Table />
      </div>
    </>
  )
}

export default PowerSupplies;