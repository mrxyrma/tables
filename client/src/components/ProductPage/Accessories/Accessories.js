import { useState } from 'react'

import ProductModal from '../ProductModal/ProductModal'
import placeholder from '../placeholder.svg'

import './Accessories.css'

function Accessories({ data }) {
  const [modalActive, setModalActive] = useState(false)
  if (data !== undefined) {
    if (data.length === 0) {
      return (
        <p className='product__subtitle'>
          Аксессуары пока не добавлены, либо отсутствуют
        </p>
      )
    } else {
      const accessories = data.map(item => {
        const image = item.src ? item.src : placeholder
        return (
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
      })

      return (
        <div>
          <p className='product__subtitle'>Принадлежности:</p>
          <div className='accessories'>
            {accessories}
          </div>
          <p className='product__text'>
            Остальные аксессуары смотри в каталоге
          </p>
        </div>
      )
    }
  }
}
export default Accessories
