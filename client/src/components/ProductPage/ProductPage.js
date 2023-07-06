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
        console.log(data)
      })
  }, [])

  return(
    <div>
      <img 
          src="https://files.keaz.ru/f/38757/obschaya_category.jpg"
          alt="product"
          className='product__image'/>
      <div className='product__title'>
        <h2>{product[0]['Артикул']} </h2>
        <h2>{product[0]['Наименование']}</h2>
      </div>
      
      <p>Аксессуары:</p>
      <p>Тут будет раздел с аксессуарами</p> 
    </div>
  )
}

export default ProductPage;