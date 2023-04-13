import './Item.css'

function Item(props) {
   
    return(
        <li className='list-item'>
            <p className='list-item__cell'>{props['Бренд']}</p>
            <p className='list-item__cell'>{props['Артикул']}</p>
            <p className='list-item__cell'>{props['Наименование']}</p>
        </li>
    )
}

export default Item;

