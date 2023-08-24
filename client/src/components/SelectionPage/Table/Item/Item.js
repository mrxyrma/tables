import { Link } from 'react-router-dom'

import './Item.css'

function Item({orderNum, name}) {

  return(
    <Link to={String(orderNum)} target='_blank' className='list-item__link'>{orderNum} - {name}</Link>
  )
}

export default Item;