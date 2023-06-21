import powerSupplies from '../../sources/power-supplies';
import dinRails from '../../sources/din-rails';
import mpsb from '../../sources/mpsb';
import cableBox from '../../sources/cable-box';
import monoblockLights from '../../sources/monoblock-lights';
import buzzers from '../../sources/buzzers';
import modularSockets from '../../sources/modular-sockets';
import mcb from '../../sources/mcb';

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
          <Route path='/mpsb' element={<SelectionPage data={mpsb}/>}/>
          <Route path='/cable-box' element={<SelectionPage data={cableBox}/>}/>
          <Route path='/monoblock-lights' element={<SelectionPage data={monoblockLights}/>}/>
          <Route path='/buzzers' element={<SelectionPage data={buzzers}/>}/>
          <Route path='/modular-sockets' element={<SelectionPage data={modularSockets}/>}/>
          <Route path='/mcb' element={<SelectionPage data={mcb}/>}/>
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;