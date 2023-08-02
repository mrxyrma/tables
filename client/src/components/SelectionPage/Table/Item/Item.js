import './Item.css'

function Item({orderNum, name}) {

  return(
    <li className='list-item'>
      <p className='list-item__cell'>{orderNum}</p>
      <p className='list-item__cell'>{name}</p>
    </li>
  )
}

export default Item;