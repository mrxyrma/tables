import Filters from './Filters/Filters'
import Table from './Table/Table'
import Search from './Search/Search'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

import useCallBackendAPI from '../../services/useCallBackendAPI'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setAllItems, setVisibleItems } from '../../store/visibleItemsReducer'

import './SelectionPage.css'

function SelectionPage() {
  const { tableId } = useParams()
  const { loading, request, error } = useCallBackendAPI()

  const title = useRef()

  const dispatch = useDispatch()
  useEffect(() => {
    request(`/${tableId}`)
      .then((data) => {
        title.current = data[0] //Заголовок страницы (название таблицы)
        document.title = title.current

        dispatch(setAllItems(data[1]))
        dispatch(setVisibleItems(data[1]))
      })
      .catch((err) => console.log(err))
  }, [])

  const spinner = loading ? <Spinner /> : null
  const errorImage = error ? <Error /> : null

  const content = !(loading || error || !title.current) ? <Content /> : null

  return (
    <>
      <Search />
      <h1 className='title'>{title.current}</h1>
      {spinner}
      {errorImage}
      {content}
    </>
  )
}

export default SelectionPage

const Content = () => {
  return (
    <div className='table-page__content'>
      <Filters />
      <Table />
    </div>
  )
}
