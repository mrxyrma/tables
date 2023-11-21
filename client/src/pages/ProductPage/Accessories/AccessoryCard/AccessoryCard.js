import { useState } from 'react'
import copyFunc from '../../../../services/copyFunc'

import ProductModal from '../../ProductModal/ProductModal'
import placeholder from '../../placeholder.svg'

function AccessoryCard({ item }) {
  const image = item.src ? item.src : placeholder
  const [modalActive, setModalActive] = useState(false)
  return (
    <article className='accessory-card'>
      <img
        alt='Фото аксессуара'
        src={image}
        className='accessory-card__image'
        onClick={() => setModalActive(true)}
      />
      <p className='product__text'>
        <b
          onClick={(e) => copyFunc(e.target)}
          className='accessory-card__copystyle'
        >
          {item.Артикул}
        </b>{' '}
        -{' '}
        <span
          onClick={(e) => copyFunc(e.target)}
          className='accessory-card__copystyle'
        >
          {item.Наименование}
        </span>
      </p>
      {modalActive ? (
        <ProductModal
          image={image}
          setModalActive={setModalActive}
        />
      ) : null}
    </article>
  )
}

export default AccessoryCard
