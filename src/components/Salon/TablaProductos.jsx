import React, { useState, useEffect } from 'react';

function TablaProductos({ productos }) {
  const [productosEditados, setProductosEditados] = useState(productos.map(producto => ({ ...producto })));

  useEffect(() => {
    setProductosEditados(productos.map(producto => ({ ...producto })));
  }, [productos]);

  const handleInputChange = (index, columna, valor) => {
    const nuevosProductos = [...productosEditados];
    nuevosProductos[index][columna] = valor;
    setProductosEditados(nuevosProductos);
  };

  const handleGuardarCambios = () => {
    // Aquí puedes guardar los cambios en tu fuente de datos (por ejemplo, enviándolos a una API o actualizando una base de datos)
    console.log("Cambios guardados:", productosEditados);
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
      <thead>
        <tr style={{ backgroundColor: '#f0f0f0' }}>
          <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Proveedores</th>
          <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Facing</th>
        </tr>
      </thead>
      <tbody>
        {productosEditados.map((producto, index) => (
          <tr key={producto.nombre} style={{ borderBottom: '1px solid #ccc' }}>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
              <input
                type="text"
                value={producto.proveedor || ''}
                onChange={(e) => handleInputChange(index, "proveedor", e.target.value)}
                style={{ width: '100%', border: 'none' }}
              />
            </td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
              <input
                type="text"
                value={producto.facing || ''}
                onChange={(e) => handleInputChange(index, "facing", e.target.value)}
                style={{ width: '100%', border: 'none' }}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={handleGuardarCambios} style={{ margin: '10px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', display:'flex', flexDirection:"row"}}>Guardar cambios</button>
    </table>
  );
}

export default TablaProductos;



