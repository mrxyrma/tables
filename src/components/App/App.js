import Header from '../Header/Header';
import TablesCards from '../TablesCards/TablesCards';
import PowerSupplies from '../PowerSupplies/PowerSupplies';
import Footer from '../Footer/Footer';

import {Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className='container'>
        <Routes>
          <Route path='/' element={<TablesCards />}/>
          <Route path='/power-supplies' element={<PowerSupplies />}/>
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;