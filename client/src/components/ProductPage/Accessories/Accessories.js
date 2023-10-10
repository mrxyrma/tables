import AccessoryCard from './AccessoryCard/AccessoryCard'

import './Accessories.css'

function Accessories({ data }) {
  if (data !== undefined) {
    if (data.length === 0) {
      return (
        <p className='product__subtitle'>
          Аксессуары пока не добавлены, либо отсутствуют
        </p>
      )
    } else {
      const accessories = data.map((item) => <AccessoryCard item={item} />)
      return (
        <div>
          <p className='product__subtitle product__subtitle-accessories'>
            Принадлежности:
          </p>
          <div className='accessories'>{accessories}</div>
          <p className='product__text'>
            Остальные аксессуары смотри{' '}
            <a
              target='blank'
              href='http://192.168.102.180/nextcloud/index.php/apps/files/?dir=/Каталоги'
            >
              в каталогах
            </a>
          </p>
        </div>
      )
    }
  }
}
export default Accessories
