import Item from './Item/Item';

import './Table.css'

const Table = ({items}) => {
  const elements = items().map(item => {
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
        <p className='list-item__cell subtitle'>Бренд</p>
        <p className='list-item__cell subtitle'>Артикул</p>
        <p className='list-item__cell subtitle'>Наименование</p>
      </li>
      {elements}
  </ul>
  )
}
export default Table;