import Filters from './Filters/Filters';
import Table from './Table/Table';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import './SelectionPage.css';

function SelectionPage({data}) {
  const {tableId} = useParams();
  const [items, setItems] = useState(data[`${tableId}`]);

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
  
  return(
    <>
      <h1 className='title'>{titles[tableId]}</h1>
      <div className="table-page__content">
        <Filters data={data[`${tableId}`]} setItems={setItems}/>
        <Table items={items}/>
      </div>
    </>
  )
}

export default SelectionPage;