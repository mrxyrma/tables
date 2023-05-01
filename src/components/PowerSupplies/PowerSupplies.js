import Filters from './Filters/Filters';
import Table from './Table/Table';

import data from '../../sources/power-supplies';

import { useMemo, useState } from 'react';

import './PowerSupplies.css';
import SearchPanel from '../SearchPanel/SearchPanel';

function PowerSupplies() {

  const [items, setItems] = useState(data.blocks);
  const [searchQuery, setSearchQuery] = useState('');

  const filterItems = useMemo(() => {
    return items.filter(item => item['Артикул'].toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery]);

  return(
    <>
      <SearchPanel searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <h1 className='title'>Подбор источников питания</h1>
      <div className="table-page__content">
        <Filters items={data.blocks}/>
        <Table items={filterItems}/>
      </div>
    </>
  )
}

export default PowerSupplies;