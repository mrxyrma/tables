import Filters from './Filters/Filters';
import Table from './Table/Table';

import data from '../../sources/power-supplies';

import { useState } from 'react';

import './PowerSupplies.css';
import SearchPanel from '../SearchPanel/SearchPanel';

function PowerSupplies() {

  const [items] = useState(data.blocks);
  const [search, setSearch] = useState('');

  const filter = () => {
    if(search) {
      return items.filter(item => item['Артикул'].toLowerCase().includes(search))
    }
    return items;
  }

  return(
    <>
      <SearchPanel value={search} setSearch={setSearch}/>
      <h1 className='title'>Подбор источников питания</h1>
      <div className="table-page__content">
        <Filters items={items}/>
        <Table items={filter}/>
      </div>
    </>
  )
}

export default PowerSupplies;