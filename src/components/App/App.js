import powerSupplies from '../../sources/power-supplies';
import dinRails from '../../sources/din-rails';

import Header from '../Header/Header';
import TablesCards from '../TablesCards/TablesCards';
import SelectionPage from '../SelectionPage/SelectionPage';
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
          <Route path='/power-supplies' element={<SelectionPage data={powerSupplies}/>}/>
          <Route path='/din-rails' element={<SelectionPage data={dinRails}/>}/>
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;