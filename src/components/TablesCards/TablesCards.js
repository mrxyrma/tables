import {Link} from 'react-router-dom';

import './TablesCards.css'

function TablesCards() {
  return(
    <>
      <h1 className='title'>Таблицы для подбора оборудования:</h1>
      <ul className='cards'>
        <li className="card__item">
          <Link className='card__item_link' to='/power-supplies'>
            <img className='card__item_image' src='https://files.keaz.ru/f/38757/obschaya_category.jpg'/>
            <p className='card__item_name'>Источники питания</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/din-rails'>
            <img className='card__item_image' src='https://tahion.spb.ru/wp-content/uploads/2020/09/din-1.png'/>
            <p className='card__item_name'>Дин-рейки</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/power-supplies'>
            <img className='card__item_image' src='https://files.keaz.ru/f/38757/obschaya_category.jpg'/>
            <p className='card__item_name'>Источники питания</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/power-supplies'>
            <img className='card__item_image' src='https://files.keaz.ru/f/38757/obschaya_category.jpg'/>
            <p className='card__item_name'>Источники питания</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/power-supplies'>
            <img className='card__item_image' src='https://files.keaz.ru/f/38757/obschaya_category.jpg'/>
            <p className='card__item_name'>Источники питания</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/power-supplies'>
            <img className='card__item_image' src='https://files.keaz.ru/f/38757/obschaya_category.jpg'/>
            <p className='card__item_name'>Источники питания</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/power-supplies'>
            <img className='card__item_image' src='https://files.keaz.ru/f/38757/obschaya_category.jpg'/>
            <p className='card__item_name'>Источники питания</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/power-supplies'>
            <img className='card__item_image' src='https://files.keaz.ru/f/38757/obschaya_category.jpg'/>
            <p className='card__item_name'>Источники питания</p>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default TablesCards;