import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCallBackendAPI from '../../services/useCallBackendAPI';

import ProductInfo from './ProductInfo/ProductInfo'
import Accessories from './Accessories/Accessories'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

import './ProductPage.css'

function ProductPage() {
  const {tableId, productId} = useParams()
  const [data, setData] = useState([{}])
  const {loading, request, error} = useCallBackendAPI()

  useEffect(() => {
    request(`/${tableId}/${productId}`)
      .then(data => setData(data))
  }, [])

  const spinner = loading ? <Spinner /> : null
  const errorImage = error ? <Error /> : null
  const content = !(loading || error) ? <Content data={data}/> : null

  return(
    <div className='product'>
      {spinner}
      {errorImage}
      {content}
    </div>
  )
}

export default ProductPage;

const Content = ({data}) => {
  return(
    <>
      <ProductInfo data={data[0]}/>
      <Accessories data={data[1]}/>
    </>
  )
}