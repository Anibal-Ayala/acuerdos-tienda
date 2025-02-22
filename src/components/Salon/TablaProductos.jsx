import React, { useEffect, useState } from "react";

function TablaProductos({ productos }) {
  const [productosEditados, setProductosEditados] = useState(
    productos.map((producto) => ({ ...producto }))
  );

  useEffect(() => {
    setProductosEditados(productos.map((producto) => ({ ...producto })));
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
    <table>
      <thead>
        <tr>
          <th>Proveedores</th>
          <th>Facing</th>
        </tr>
      </thead>
      <tbody>
        {productosEditados.map((producto, index) => (
          <tr key={producto.nombre}>
            <td>
              <input
                type="text"
                value={producto.proveedor || ""}
                onChange={(e) =>
                  handleInputChange(index, "proveedor", e.target.value)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={producto.facing}
                onChange={(e) =>
                  handleInputChange(index, "facing", e.target.value)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={handleGuardarCambios}>Guardar cambios</button>
    </table>
  );
}

export default TablaProductos;
