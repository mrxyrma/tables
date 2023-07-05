import { useParams } from 'react-router-dom';
import data from '../../sources/data';

import './ProductPage.css'
function ProductPage() {
  const {tableId, productId} = useParams();

  return(
    <div>
      <img 
          src="https://files.keaz.ru/f/38757/obschaya_category.jpg"
          alt="product"
          className='product__image'/>
      <div className='product__title'>
        <h2>{`${data[tableId][productId - 1]['Артикул']} `}</h2>
        <h2>{`${data[tableId][productId - 1]['Наименование']} `}</h2>
      </div>
      
      <p>Аксессуары:</p>
      <p>Тут будет раздел с аксессуарами</p> 
    </div>
  )
}

export default ProductPage;