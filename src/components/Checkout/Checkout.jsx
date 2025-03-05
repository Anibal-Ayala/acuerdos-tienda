import React, { useState } from 'react';
import TablaCheckout from './TablaCheckout';

function Checkout() {
  const [cajaSeleccionada, setCajaSeleccionada] = useState(null);

  const cajas = Array.from({ length: 15 }, (_, i) => `CAJA ${i + 1}`);

  const handleCajaClick = (caja) => {
    setCajaSeleccionada(caja);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Checkout</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
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
            }}
          >
            {caja}
          </button>
        ))}
      </div>
      {cajaSeleccionada && <TablaCheckout caja={cajaSeleccionada} />}
    </div>
  );
}

export default Checkout;

