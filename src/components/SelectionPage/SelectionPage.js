import Filters from './Filters/Filters';
import Table from './Table/Table';

import { useState } from 'react';

import './SelectionPage.css';

function SelectionPage({data, title}) {

  const [items, setItems] = useState(data['Массив с таблицей']);
  
  return(
    <>
      <h1 className='title'>{title}</h1>
      <div className="table-page__content">
        <Filters data={data['Массив с таблицей']} setItems={setItems}/>
        <Table items={items}/>
      </div>
    </>
  )
}

export default SelectionPage;