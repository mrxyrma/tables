import Item from './Item/Item';

import data from '../../../sources/power-supplies';

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
  });

  return(
    <ul className="table">
      <li className='list-item'>
        <p className='list-item__cell'>Бренд</p>
        <p className='list-item__cell'>Артикул</p>
        <p className='list-item__cell'>Наименование</p>
      </li>
      {elements}
  </ul>
  )
}
export default Table;