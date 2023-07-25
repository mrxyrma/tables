import Filters from './Filters/Filters'
import Table from './Table/Table'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

import useCallBackendAPI from '../../services/useCallBackendAPI'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import './SelectionPage.css'

function SelectionPage() {
  const {tableId} = useParams()
  const {loading, request, error} = useCallBackendAPI()

  const titles = {
    'power-supplies': 'Источники питания',
    'diode-modules': 'Диодные модули резервирования',
    'din-rails': 'Дин-рейки',
    'mpsb': 'Автоматы защиты двигателя',
    'cable-box': 'Перфорированные кабельные каналы',
    'monoblock-lights': 'Световые индикаторы',
    'buzzers': 'Зуммеры',
    'modular-sockets': 'Модульные розетки',
    'mcb': 'Модульные автоматические выключатели',
    'modular-loadbreakers': 'Модульные выключатели нагрузки'
  }

  const [items, setItems] = useState([{}])
  const ref = useRef()

  useEffect(() => {
    request(tableId)
      .then(data => {
        setItems(data)
        ref.current = data
      })
      .catch(err => console.log(err));
  }, [])

  const spinner = loading ? <Spinner /> : null
  const errorImage = error ? <Error /> : null
  const content = !(loading || error || !ref.current) ? <Content data={ref.current} items={items} setItems={setItems} /> : null

  return(
    <>
      <h1 className='title'>{titles[tableId]}</h1>
      {spinner}
      {errorImage}
      {content}
    </>
  )
}

export default SelectionPage

const Content = ({data, items, setItems}) => {
  return(
    <div className="table-page__content">
      <Filters data={data} setItems={setItems}/>
      <Table items={items}/>
    </div>
  )
}