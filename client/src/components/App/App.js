import Header from '../Header/Header';
import TablesCards from '../TablesCards/TablesCards';
import SelectionPage from '../SelectionPage/SelectionPage';
import ProductPage from '../ProductPage/ProductPage';
import Footer from '../Footer/Footer';

import {Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className='container'>
        <Routes>
          <Route path="/:tableId/:productId" element={<ProductPage />}/>
          <Route path="/:tableId" element={<SelectionPage />}/>
          <Route path='/' element={<TablesCards />}/>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;