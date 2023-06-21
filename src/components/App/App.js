import powerSupplies from '../../sources/power-supplies';
import dinRails from '../../sources/din-rails';
import mpsb from '../../sources/mpsb';
import cableBox from '../../sources/cable-box';
import monoblockLights from '../../sources/monoblock-lights';
import buzzers from '../../sources/buzzers';
import modularSockets from '../../sources/modular-sockets';
import mcb from '../../sources/mcb';
import diodeModules from '../../sources/diode-modules';

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
          <Route path='/power-supplies' element={<SelectionPage data={powerSupplies} title={'Источники питания'}/>}/>
          <Route path='/diode-modules' element={<SelectionPage data={diodeModules} title={'Диодные модули резервирования'}/>}/>
          <Route path='/din-rails' element={<SelectionPage data={dinRails} title={'Дин-рейки'}/>}/>
          <Route path='/mpsb' element={<SelectionPage data={mpsb} title={'Автоматы защиты двигателя'}/>}/>
          <Route path='/cable-box' element={<SelectionPage data={cableBox} title={'Кабельные каналы'}/>}/>
          <Route path='/monoblock-lights' element={<SelectionPage data={monoblockLights} title={'Световые индикаторы'}/>}/>
          <Route path='/buzzers' element={<SelectionPage data={buzzers} title={'Зуммеры'}/>}/>
          <Route path='/modular-sockets' element={<SelectionPage data={modularSockets} title={'Модульные розетки'}/>}/>
          <Route path='/mcb' element={<SelectionPage data={mcb} title={'Модульные автоматические выключатели'}/>}/>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;