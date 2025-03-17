import React, { useState, useEffect } from 'react';
import TablaCheckout from './TablaCheckout';
import { getCajas } from '../../asyncmock'; 

function Checkout() {
  const [cajaSeleccionada, setCajaSeleccionada] = useState(null);
  const [cajas, setCajas] = useState([]);
  const [mostrarCajas, setMostrarCajas] = useState(false);

  useEffect(() => {
    getCajas().then((data) => setCajas(data));
  }, []);

  const handleCajaClick = (caja) => {
    setCajaSeleccionada(caja);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Checkout</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={() => setMostrarCajas(!mostrarCajas)} className='btn btn-success' style={{margin:"10px"}}>
          {mostrarCajas ? 'Ocultar Cajas' : 'Cajas'}
        </button>
        <button disabled className='btn btn-success' style={{margin:"10px"}}>Frentes</button>
        <button disabled className='btn btn-success' style={{margin:"10px"}}>Techos</button>
      </div>
      {mostrarCajas && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
          {cajas.map((caja) => (
            <button
              key={caja}
              onClick={() => handleCajaClick(caja)}
              style={{
                padding: '10px 20px',
                margin: '5px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#f0f0f0',
                cursor: 'pointer',
                minWidth: '80px', // Ancho mínimo fijo
                textAlign: 'center', // Centrar el texto
              }}
            >
              {caja}
            </button>
          ))}
        </div>
      )}
      {cajaSeleccionada && <TablaCheckout caja={cajaSeleccionada} />}
    </div>
  );
}

export default Checkout;

