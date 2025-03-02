import React, { useState, useEffect } from 'react';

function TablaProductos({ productos }) {
  const [productosEditados, setProductosEditados] = useState([]);

  useEffect(() => {
    setProductosEditados(productos);
  }, [productos]);

  const handleInputChange = (index, columna, valor) => {
    const nuevosProductos = [...productosEditados];
    nuevosProductos[index][columna] = valor;
    setProductosEditados(nuevosProductos);
  };

  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Proveedores</th>
            <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Facing</th>
            <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosEditados.map((producto, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                <input
                  type="text"
                  value={producto.proveedor || ''}
                  onChange={(e) => handleInputChange(index, 'proveedor', e.target.value)}
                  style={{ width: '100%', border: 'none' }}
                />
              </td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                <input
                  type="text"
                  value={producto.facing || ''}
                  onChange={(e) => handleInputChange(index, 'facing', e.target.value)}
                  style={{ width: '100%', border: 'none' }}
                />
              </td>
              <td style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'center' }}>
                <button disabled className="btn btn-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" style={{ textAlign: 'center' }}>
              <button
                disabled
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                Guardar cambios
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;