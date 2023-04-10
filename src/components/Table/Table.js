import Item from './Item/Item';

import data from '../../sources/power-supplies';

import './Table.css'


const Table = () => {
    const elements = data.blocks.map(item => {
        const {id, ...itemProps} = item;
             return(
                <Item 
                    key={id}
                    {...itemProps}
            />
             )
    })

    const brandsArray = Array.from(new Set(data.blocks.map(item => item.brand)));

    const brands = brandsArray.map(item => {
        return(<label>
          <input type='checkbox' value={item} /> {item}
        </label>
        )
      });


      const filters = Object.keys(data.blocks[0]).filter(item => {
        return item != 'id' && item != 'vendorCode' && item != 'name';
      });


    return(
      <div className="table-page">
        <h1 className='title'>Подбор источников питания</h1>
        <div className="table-page__content">
          <aside className='filters'>
            <h2 className='subtitle'>Фильтры:</h2>

              
              <h3 className='filter-title'>Бренд</h3>
              {brands}
              <h3 className='filter-title'>Количество фаз на входе</h3>
              <h3 className='filter-title'>Номинальное выходное напряжение Uн, В DC</h3>
              <h3 className='filter-title'>Номинальная мощность Pн, Вт</h3>
              <h3 className='filter-title'>Номинальный ток Iн, А</h3>
              <h3 className='filter-title'>Тип монтажа</h3>
              <h3 className='filter-title'>Форм-фактор</h3>
              <h3 className='filter-title'>Регулировка напряжения</h3>
              <h3 className='filter-title'>Наличие контакта DC OK</h3>
        
          </aside>
          <ul className="table">
            <li className='list-item'>
              <p className='list-item__cell'>Бренд</p>
              <p className='list-item__cell'>Артикул</p>
              <p className='list-item__cell'>Наименование</p>
              {/* <p className='list-item__cell'>Кол-во фаз на входе</p>
              <p className='list-item__cell'>Uн, В DC</p>
              <p className='list-item__cell'>Pн, Вт</p>
              <p className='list-item__cell'>Iн, А</p> */}
              {/* <p className='list-item__cell'>Тип</p> */}
              {/* <p className='list-item__cell'>Форм-фактор</p> */}
              {/* <p className='list-item__cell'>Рег U-я</p>
              <p className='list-item__cell'>DC OK</p> */}
            </li>
            {elements}
          </ul>
        </div>
      </div>
    )
}

export default Table;