import Filters from './Filters/Filters';
import Table from './Table/Table';
import callBackendAPI from '../../services/callBackendAPI';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import './SelectionPage.css';

function SelectionPage() {
  const {tableId} = useParams();
  
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
  const ref = useRef([{}])

  useEffect(() => {
    callBackendAPI(tableId)
      .then(data => {
        setItems(data)
        ref.current = data
      })
      .catch(err => console.log(err));
  }, [])

  return(
    <>
      <h1 className='title'>{titles[tableId]}</h1>
      <div className="table-page__content">
        <Filters data={ref.current} setItems={setItems}/>
        <Table items={items}/>
      </div>
    </>
  )
}

export default SelectionPage;