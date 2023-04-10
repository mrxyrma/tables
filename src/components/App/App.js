import Header from '../Header/Header';
import TablesCards from '../TablesCards/TablesCards';
import Table from '../Table/Table';
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
          <Route path='/power' element={<Table />}/>
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;