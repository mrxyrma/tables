import { Link } from 'react-router-dom'

import Item from './Item/Item'

import './Table.css'

const Table = ({items}) => {
  const elements = items.map((item, index) => {
    return(
      <Link key={index} to={item.Артикул}>
        <Item orderNum = {item['Артикул']} name={item['Наименование']}/>
      </Link>
    )
  })

  return(
    <ul className="table">
      <li className='list-item subtitle'>
        <p className='list-item__cell'>Артикул</p>
        <p className='list-item__cell'>Наименование</p>
      </li>
      {items.length
        ? elements
        : <p className='list-item__no-items-title'>Изделий с выбранными характеристиками нет<br/>Попробуйте изменить критерии поиска</p>}
    </ul>
  )
}

export default Table;