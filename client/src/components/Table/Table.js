import Item from './Item/Item'

import { useSelector } from 'react-redux'

import './Table.css'

const Table = () => {
  const visibleItems = useSelector((state) => state.visibleItems.visibleItems)

  const elements = visibleItems.map((item) => {
    return (
      <li
        key={item._id}
        className='list-item'
      >
        <Item
          orderNum={item['Артикул']}
          name={item['Наименование']}
        />
      </li>
    )
  })

  return (
    <ul className='table'>
      <li className='subtitle'>Возможные варианты:</li>
      {visibleItems.length ? (
        elements
      ) : (
        <p className='list-item__no-items-title'>
          Изделий с выбранными характеристиками нет
          <br />
          Попробуйте изменить критерии поиска
        </p>
      )}
    </ul>
  )
}

export default Table
