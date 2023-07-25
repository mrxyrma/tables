import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import callBackendAPI from '../../services/callBackendAPI';

import ProductInfo from './ProductInfo/ProductInfo';
import Accessories from './Accessories/Accessories';

import './ProductPage.css'

function ProductPage() {
  const {tableId, productId} = useParams();
  const [data, setData] = useState([{}]);

  useEffect(() => {
    callBackendAPI(`${tableId}/${productId}`)
      .then(data => setData(data))
  }, [])

  return(
    <div className='product'>
      <ProductInfo data={data[0]}/>
      <Accessories data={data[1]}/>
    </div>
  )
}

export default ProductPage;