import { useState } from 'react'
import copyFunc from '../../../services/copyFunc'

import ProductModal from '../ProductModal/ProductModal'
import placeholder from '../placeholder.svg'

import './ProductInfo.css'

function ProductInfo({ data }) {
  const paramsArray = []
  const [modalActive, setModalActive] = useState(false)
  const image = data['src'] ? data['src'] : placeholder

  document.title = `${data.Артикул} - ${data.Наименование}`

  for (let key in data) {
    if (!['_id', 'Артикул', 'Наименование', 'Серия', 'src'].includes(key)) {
      paramsArray.push(`${key}: ${data[key]}`)
    }
  }

  const params = paramsArray.map((item, index) => {
    return (
      <p
        key={index}
        className='product__text'
      >
        {item}
      </p>
    )
  })

  return (
    <div className='product-info'>
      <img
        className='product-info__image'
        src={image}
        alt='Фото изделия'
        onClick={() => setModalActive(true)}
      />
      <div>
        <h2
          className='product-info__name'
          onClick={(e) => copyFunc(e.target)}
        >
          {data['Наименование']}{' '}
        </h2>
        <br />
        <h3
          className='product-info__order-number'
          onClick={(e) => copyFunc(e.target)}
        >
          {data['Артикул']}
        </h3>
        <p className='product__subtitle'>Технические характеристики:</p>
        {params}
      </div>
      {modalActive ? (
        <ProductModal
          setModalActive={setModalActive}
          image={image}
        />
      ) : null}
    </div>
  )
}

export default ProductInfo
