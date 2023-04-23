import Filters from './Filters/Filters';
import Table from './Table/Table';

import data from '../../sources/power-supplies';

import { useState } from 'react';

import './PowerSupplies.css';

function PowerSupplies() {

  const [items, setItems] = useState(data.blocks);

  return(
    <>
      <h1 className='title'>Подбор источников питания</h1>
      <div className="table-page__content">
        <Filters items={items} setItems={setItems}/>
        <Table items={items}/>
      </div>
    </>
  )
}

export default PowerSupplies;