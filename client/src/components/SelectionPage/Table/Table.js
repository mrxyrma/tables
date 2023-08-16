import Item from './Item/Item'

import './Table.css'

const Table = ({items}) => {
  const elements = items.map((item, index) => {
    return(
      <li key={index} className='list-item'>
        <Item orderNum = {String(item['Артикул'])} name={item['Наименование']}/>
      </li>
    )
  })

  return(
    <ul className="table">
      <li className='subtitle'>Возможные варианты:</li>
      {items.length
        ? elements
        : <p className='list-item__no-items-title'>Изделий с выбранными характеристиками нет<br/>Попробуйте изменить критерии поиска</p>}
    </ul>
  )
}

export default Table