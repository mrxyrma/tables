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
          <Link className='card__item_link' to='/mpsb'>
            <img className='card__item_image' src='https://uploads.chint.com/uploads/product_user/image/file/ac7aec48-c44a-44f4-bc58-2a701993b08e.jpg'/>
            <p className='card__item_name'>Автоматы защиты двигателя</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/cable-box'>
            <img className='card__item_image' src='https://www.minimaks.ru/upload/iblock/3ba/wuegx7gkfarpbgpqs9x09jx9ufvvhvoy.jpg'/>
            <p className='card__item_name'>Кабельные каналы</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/monoblock-lights'>
            <img className='card__item_image' src='https://files.keaz.ru/f/5532/ad-22-ds-dlya-sayta_big.jpg'/>
            <p className='card__item_name'>Световые индикаторы</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/buzzers'>
            <img className='card__item_image' src='https://chint-electric.ru/image/cache/data/indicator/ND16-Buzzer-red-280x280.jpg'/>
            <p className='card__item_name'>Зуммеры</p>
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