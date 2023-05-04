import data from '../../sources/power-supplies';

import Filters from './Filters/Filters';
import Table from './Table/Table';
import SearchPanel from '../SearchPanel/SearchPanel';

import { useMemo, useState } from 'react';

import './PowerSupplies.css';

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
        <Filters items={items}/>
        <Table items={filterItems}/>
      </div>
    </>
  )
}

export default PowerSupplies;