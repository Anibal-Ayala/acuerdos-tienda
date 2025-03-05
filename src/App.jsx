
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Salon from './components/Salon/Salon'; // Importa Salon desde la carpeta components/Salon
import './App.css'
import Checkout from './components/Checkout/Checkout'
import Exhibidores from './components/Exhibidores/Exhibidores'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/salon" element={<Salon />} />
        <Route path="/salon/:subcategoria" element={<Salon />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/exhibidores" element={<Exhibidores />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;