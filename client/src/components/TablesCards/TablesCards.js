import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import useCallBackendAPI from '../../services/useCallBackendAPI'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

import './TablesCards.css'

function TablesCards() {
  const {loading, request, error} = useCallBackendAPI()

  const [cards, setCards] = useState([])

  useEffect(() => {
    request('/')
    .then(data => setCards(data))
    .catch(err => console.log(err))

    document.title = 'Таблицы'
  }, [request])
  
  const tables = cards.map(item => {
    return(
      <li className="card__item" key={item.title}>
          <Link className='card__item_link' to={`${item.link}`}>
            <img className='card__item_image' alt={item.link} src={item.src}/>
            <p className='card__item_name'>{item.title}</p>
          </Link>
      </li>
    )
  })

  const spinner = loading ? <Spinner /> : null
  const errorImage = error ? <Error /> : null
  const content = !(loading || error) ? tables : null

  return(
    <>
      <h1 className='title'>Таблицы для подбора оборудования:</h1>
        {spinner}
        {errorImage}
      <ul className='cards'>
        {content}
      </ul>
    </>
  )
}

export default TablesCards