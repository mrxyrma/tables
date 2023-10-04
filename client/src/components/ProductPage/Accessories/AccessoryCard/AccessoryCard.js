import { useState } from 'react'

import ProductModal from '../../ProductModal/ProductModal'
import placeholder from '../../placeholder.svg'


function AccessoryCard({item}) {
  const image = item.src ? item.src : placeholder
  const [modalActive, setModalActive] = useState(false)

  return(
    <article key={item.Артикул} className='accessory-card'>
      <img
        alt='Фото аксессуара'
        src={image}
        className='accessory-card_image'
        onClick={() => setModalActive(true)}
      />
      <p
        key={item.Артикул}
        className='product__text'
      >
        <b>{item.Артикул}</b> - {item.Наименование}
      </p>
      {modalActive ? <ProductModal image={image} setModalActive={setModalActive}/> : null}
    </article>
  )
}

export default AccessoryCard