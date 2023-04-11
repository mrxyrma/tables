import './Item.css'

function Item(props) {
   const {brand, vendorCode, name, phase, voltage,power, current, type, formFactor, voltageAdj, dcOk} = props;
    return(
        <li className='list-item'>
            <p className='list-item__cell'>{brand}</p>
            <p className='list-item__cell'>{vendorCode}</p>
            <p className='list-item__cell'>{name}</p>
            {/* <p className='list-item__cell'>{phase}</p> */}
            {/* <p className='list-item__cell'>{voltage}</p>
            <p className='list-item__cell'>{power}</p>
            <p className='list-item__cell'>{current}</p> */}
            {/* <p className='list-item__cell'>{type}</p>
            <p className='list-item__cell'>{formFactor}</p> */}
            {/* <p className='list-item__cell'>{voltageAdj}</p>
            <p className='list-item__cell'>{dcOk}</p> */}

        </li>
    )
}

export default Item;

