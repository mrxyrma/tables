import Filters from './Filters/Filters'
import Table from './Table/Table'
import Search from './Search/Search'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

import useCallBackendAPI from '../../services/useCallBackendAPI'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import './SelectionPage.css'

function SelectionPage() {
  const {tableId} = useParams()
  const {loading, request, error} = useCallBackendAPI()

  const [items, setItems] = useState([{}])
  const [inputValue, setInputValue] = useState('')
  const ref = useRef()
  const title = useRef()

  useEffect(() => {
    request(`/${tableId}`)
      .then(data => {
        title.current = data[0] //Заголовок страницы (название таблицы)
        setItems(data[1]) //Данные из таблицы
        ref.current = data[1]
      })
      .catch(err => console.log(err))
  }, [request, tableId])

  useEffect(()=>{
    if (title.current !== undefined) {
      document.title = title.current
    }
  })

  const spinner = loading ? <Spinner /> : null
  const errorImage = error ? <Error /> : null
  const content = !(loading || error || !ref.current) ? <Content data={ref.current} items={items} setItems={setItems} setInputValue={setInputValue}/> : null

  return(
    <>
      <Search data={ref.current} setItems={setItems} inputValue={inputValue} setInputValue={setInputValue}/>
      <h1 className='title'>{title.current}</h1>
      {spinner}
      {errorImage}
      {content}
    </>
  )
}

export default SelectionPage

const Content = ({data, items, setItems, setInputValue}) => {
  return(
    <div className="table-page__content">
      <Filters data={data} setItems={setItems} setInputValue={setInputValue}/>
      <Table items={items}/>
    </div>
  )
}