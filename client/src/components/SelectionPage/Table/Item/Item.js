import { Link } from 'react-router-dom'

import './Item.css'

function Item({orderNum, name}) {

  return(
    <Link to={orderNum} className='list-item__link'>{orderNum} - {name}</Link>
  )
}

export default Item;