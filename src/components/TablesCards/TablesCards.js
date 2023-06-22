import {Link} from 'react-router-dom';

import './TablesCards.css'

function TablesCards() {
  return(
    <>
      <h1 className='title'>Таблицы для подбора оборудования:</h1>
      <ul className='cards'>
        <li className="card__item">
          <Link className='card__item_link' to='/power-supplies'>
            <img className='card__item_image' alt='power-supplies' src='https://files.keaz.ru/f/38757/obschaya_category.jpg'/>
            <p className='card__item_name'>Источники питания</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/diode-modules'>
            <img className='card__item_image' alt='diode-modules' src='https://catalog.weidmueller.com/groups/GR_Power_Extensionmodules_HA_1.jpg;jsessionid=94269D9C16BB86A7E5105EFFC9828EF7'/>
            <p className='card__item_name'>Диодные модули резервирования</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/din-rails'>
            <img className='card__item_image' alt='din-rails' src='https://tahion.spb.ru/wp-content/uploads/2020/09/din-1.png'/>
            <p className='card__item_name'>Дин-рейки</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/mpsb'>
            <img className='card__item_image' alt='mpsb' src='https://uploads.chint.com/uploads/product_user/image/file/ac7aec48-c44a-44f4-bc58-2a701993b08e.jpg'/>
            <p className='card__item_name'>Автоматы защиты двигателя</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/cable-box'>
            <img className='card__item_image' alt='cable-box' src='https://www.minimaks.ru/upload/iblock/3ba/wuegx7gkfarpbgpqs9x09jx9ufvvhvoy.jpg'/>
            <p className='card__item_name'>Кабельные каналы</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/monoblock-lights'>
            <img className='card__item_image' alt='monoblock-lights' src='https://files.keaz.ru/f/5532/ad-22-ds-dlya-sayta_big.jpg'/>
            <p className='card__item_name'>Световые индикаторы</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/buzzers'>
            <img className='card__item_image' alt='buzzers' src='https://chint-electric.ru/image/cache/data/indicator/ND16-Buzzer-red-280x280.jpg'/>
            <p className='card__item_name'>Зуммеры</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/modular-sockets'>
            <img className='card__item_image' alt='modular-sockets' src='https://elmir-anapa.ru/images/i/11000/11650/b1.png'/>
            <p className='card__item_name'>Модульные розетки</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/mcb'>
            <img className='card__item_image' alt='mcb' src='https://chint.ru/upload/iblock/8df/3ttbesj6pselyirvtbldo05lgx7tfg0g/NB1-63%20DC%20%20%20182721_0.jpg'/>
            <p className='card__item_name'>Модульные автоматические выключатели</p>
          </Link>
        </li>
        <li className="card__item">
          <Link className='card__item_link' to='/modular-loadbreakers'>
            <img className='card__item_image' alt='modular-loadbreakers' src='https://keaz.ru/f/843/photo-vn32-2x.jpg'/>
            <p className='card__item_name'>Модульные выключатели нагрузки</p>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default TablesCards;