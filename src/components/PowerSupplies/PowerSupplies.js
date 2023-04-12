import Filters from './Filters/Filters';
import Table from './Table/Table';

import './PowerSupplies.css';

function PowerSupplies() {

 return(
    <>
      <h1 className='title'>Подбор источников питания</h1>
      <div className="table-page__content">
        <aside className='filters'>
          <h2 className='subtitle'>Фильтры:</h2>
          <Filters />
        </aside>
        <Table />
      </div>
    </>
  )
}

export default PowerSupplies;