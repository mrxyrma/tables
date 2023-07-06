import { Link } from 'react-router-dom';

import Item from './Item/Item';

import './Table.css'

const Table = ({items}) => {
  const elements = items.map(item => {
    return(
      <Link key={item.Артикул} to={item.Артикул}>
        <Item  {...item}/>
      </Link>
    )
  });

  return(
    <ul className="table">
      <li className='list-item'>
        <p className='list-item__cell subtitle'>Бренд</p>
        <p className='list-item__cell subtitle'>Артикул</p>
        <p className='list-item__cell subtitle'>Наименование</p>
      </li>
      {items.length
        ? elements
        : <p className='list-item__no-items-title'>Изделий с выбранными характеристиками нет<br/>Попробуйте изменить критерии поиска</p>}
  </ul>
  )
}
export default Table;