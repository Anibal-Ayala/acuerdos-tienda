import React, { useState } from 'react';

function TablaCheckout({ caja }) {
  const [ladoA, setLadoA] = useState([
    { proveedor: 'Proveedor 1', facing: '10%' },
    { proveedor: 'Proveedor 2', facing: '20%' },
  ]);
  const [ladoB, setLadoB] = useState([
    { proveedor: 'Proveedor 3', facing: '30%' },
    { proveedor: 'Proveedor 4', facing: '40%' },
  ]);

  const handleInputChange = (lado, index, columna, valor) => {
    const nuevosDatos = lado === 'A' ? [...ladoA] : [...ladoB];
    nuevosDatos[index][columna] = valor;
    if (lado === 'A') {
      setLadoA(nuevosDatos);
    } else {
      setLadoB(nuevosDatos);
    }
  };

  const agregarProveedor = (lado) => {
    if (lado === 'A') {
      setLadoA([...ladoA, { proveedor: '', facing: '' }]);
    } else {
      setLadoB([...ladoB, { proveedor: '', facing: '' }]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>{caja}</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>LADO A</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Proveedor</th>
                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Facing</th>
              </tr>
            </thead>
            <tbody>
              {ladoA.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                    <input
                      type="text"
                      value={item.proveedor}
                      onChange={(e) =>
                        handleInputChange('A', index, 'proveedor', e.target.value)
                      }
                      style={{ width: '100%', border: 'none' }}
                    />
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                    <input
                      type="text"
                      value={item.facing}
                      onChange={(e) =>
                        handleInputChange('A', index, 'facing', e.target.value)
                      }
                      style={{ width: '100%', border: 'none' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => agregarProveedor('A')} className='btn btn-primary' style={{marginTop:'10px'}}>
            Agregar Proveedor
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>LADO B</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Proveedor</th>
                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Facing</th>
              </tr>
            </thead>
            <tbody>
              {ladoB.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                    <input
                      type="text"
                      value={item.proveedor}
                      onChange={(e) =>
                        handleInputChange('B', index, 'proveedor', e.target.value)
                      }
                      style={{ width: '100%', border: 'none' }}
                    />
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                    <input
                      type="text"
                      value={item.facing}
                      onChange={(e) =>
                        handleInputChange('B', index, 'facing', e.target.value)
                      }
                      style={{ width: '100%', border: 'none' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => agregarProveedor('B')} style={{ marginTop: '10px' }} className='btn btn-primary'>
            Agregar Proveedor
          </button>
        </div>
      </div>
    </div>
  );
}

export default TablaCheckout;

