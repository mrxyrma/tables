import {Link} from 'react-router-dom';

import './TablesCards.css'

function TablesCards() {
  const items = [
    {title: 'Источники питания',
    link: 'power-supplies',
    src: 'https://files.keaz.ru/f/38757/obschaya_category.jpg'},
    {title: 'Диодные модули резервирования',
    link: 'diode-modules',
    src: 'https://catalog.weidmueller.com/groups/GR_Power_Extensionmodules_HA_1.jpg;jsessionid=94269D9C16BB86A7E5105EFFC9828EF7'},
    {title: 'Дин-рейки',
    link: 'din-rails',
    src: 'https://tahion.spb.ru/wp-content/uploads/2020/09/din-1.png'},
    {title: 'Автоматы защиты двигателя',
    link: 'mpsb',
    src: 'https://uploads.chint.com/uploads/product_user/image/file/ac7aec48-c44a-44f4-bc58-2a701993b08e.jpg'},
    {title: 'Кабельные каналы',
    link: 'cable-box',
    src: 'https://www.minimaks.ru/upload/iblock/3ba/wuegx7gkfarpbgpqs9x09jx9ufvvhvoy.jpg'},
    {title: 'Световые индикаторы',
    link: 'monoblock-lights',
    src: 'https://files.keaz.ru/f/5532/ad-22-ds-dlya-sayta_big.jpg'},
    {title: 'Зуммеры',
    link: 'buzzers',
    src: 'https://chint-electric.ru/image/cache/data/indicator/ND16-Buzzer-red-280x280.jpg'},
    {title: 'Модульные розетки',
    link: 'modular-sockets',
    src: 'https://elmir-anapa.ru/images/i/11000/11650/b1.png'},
    {title: 'Модульные автоматические выключатели',
    link: 'mcb',
    src: 'https://chint.ru/upload/iblock/8df/3ttbesj6pselyirvtbldo05lgx7tfg0g/NB1-63%20DC%20%20%20182721_0.jpg'},
    {title: 'Модульные выключатели нагрузки',
    link: 'modular-loadbreakers',
    src: 'https://keaz.ru/f/843/photo-vn32-2x.jpg'}
  ]
  
  const pages = items.map(item => {
    return(
      <li className="card__item">
          <Link className='card__item_link' to={`/${item.link}`}>
            <img className='card__item_image' alt={item.link} src={item.src}/>
            <p className='card__item_name'>{item.title}</p>
          </Link>
      </li>
    )
  })            
  return(
    <>
      <h1 className='title'>Таблицы для подбора оборудования:</h1>
      <ul className='cards'>
        {pages}
      </ul>
    </>
  )
}

export default TablesCards;