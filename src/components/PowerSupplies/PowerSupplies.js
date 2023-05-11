import data from '../../sources/power-supplies';

import Filters from './Filters/Filters';
import Table from './Table/Table';
import SearchPanel from '../SearchPanel/SearchPanel';

import { useEffect, useState } from 'react';

import './PowerSupplies.css';

function PowerSupplies() {

  const [items, setItems] = useState(data.blocks);
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   function filterBySearchQuery() {
  //     setItems(data.blocks.filter(item => item['Артикул'].toLowerCase().includes(searchQuery.toLowerCase())))
  //   }
  //   filterBySearchQuery()
  // }, [searchQuery]);

  return(
    <>
      <SearchPanel searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <h1 className='title'>Подбор источников питания</h1>
      <div className="table-page__content">
        <Filters data={data.blocks} items={items} setItems={setItems}/>
        <Table items={items}/>
      </div>
    </>
  )
}

export default PowerSupplies;