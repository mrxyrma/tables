import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { serverIp } from '../../config/config';

import ProductInfo from './ProductInfo/ProductInfo';
import Accessories from './Accessories/Accessories';

import './ProductPage.css'

function ProductPage() {
  const {tableId, productId} = useParams();
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`${serverIp}/${tableId}/${productId}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [tableId, productId])

  return(
    <div className='product'>
      <ProductInfo data={data[0]}/>
      <Accessories data={data[1]}/>
    </div>
  )
}

export default ProductPage;