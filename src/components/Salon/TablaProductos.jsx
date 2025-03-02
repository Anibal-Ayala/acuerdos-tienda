import React, { useState, useEffect } from 'react';

function TablaProductos({ productos, onProductosChange }) {
  const [productosEditados, setProductosEditados] = useState([]);

  useEffect(() => {
    setProductosEditados(productos);
  }, [productos]);

  const handleInputChange = (index, columna, valor) => {
    const nuevosProductos = [...productosEditados];
    nuevosProductos[index][columna] = valor;
    setProductosEditados(nuevosProductos);
    if (onProductosChange) {
      onProductosChange(nuevosProductos);
    }
  };

  const handleGuardarCambios = () => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres guardar los cambios?');
    if (confirmacion) {
      fetch('/productos.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productosEditados),
      })
        .then((response) => response.json())
        .then((data) => console.log('Cambios guardados:', data));
    }
  };

  const handleEliminarProveedor = (index) => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este proveedor?');
    if (confirmacion) {
      const nuevosProductos = [...productosEditados];
      nuevosProductos.splice(index, 1);
      setProductosEditados(nuevosProductos);
      if (onProductosChange) {
        onProductosChange(nuevosProductos);
      }
      fetch('/productos.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevosProductos),
      })
        .then((response) => response.json())
        .then((data) => console.log('Proveedor eliminado:', data));
    }
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
              <td style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'center' }}>
                <button
                  onClick={() => handleEliminarProveedor(index)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleGuardarCambios}
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
    </div>
  );
}

export default TablaProductos;

