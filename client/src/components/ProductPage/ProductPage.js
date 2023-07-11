import { useParams } from 'react-router-dom';

import './ProductPage.css'
import { useEffect, useState } from 'react';

function ProductPage() {
  const {tableId, productId} = useParams();
  const [product, setProduct] = useState([{}]);

  useEffect(() => {
    fetch(`http://localhost:5000/${tableId}/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }, [])

 const params = () => {
  const paramsArray = []

  for (let key in product[0]) {
    if (key !== '_id' && key !== 'Артикул' && key !== 'Наименование')
    paramsArray.push(`${key}: ${product[0][key]}`)
  }

  const view = paramsArray.map(item => {
    return(
      <p className='product__param'>{item}</p>
    )
  })

  return view
}

  return(
    <div className='product'>
      <div className='product__info'>
        <img
          className='product__image'
          src="https://files.keaz.ru/f/38757/obschaya_category.jpg"
          alt="product"
          />
        <div>
          <h2 className='product__name'>{product[0]['Наименование']} </h2>
          <h3 className='product__order-number'>{product[0]['Артикул']}</h3>
          <p className='product__subtitle'>Технические характеристики:</p>
          {params()}
        </div>
      </div>
      <div>
        <p className='product__subtitle'>Принадлежности:</p>
        <p>Тут будет раздел с аксессуарами</p>
      </div>
    </div>
  )
}

export default ProductPage;