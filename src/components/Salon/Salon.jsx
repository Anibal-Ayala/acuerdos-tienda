import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavegacionSubcategorias from '../NavegaciónSubcategorias/NavegacionSubcategorias'
import TablaProductos from './TablaProductos'
import { getSubcategorias } from '../../asyncmock';

function Salon() {
  const { subcategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [tablaVisible, setTablaVisible] = useState(false);
  const [agregarAcuerdoVisible, setAgregarAcuerdoVisible] = useState(false);
  const [nuevosProductos, setNuevosProductos] = useState([]);

  useEffect(() => {
    getSubcategorias()
      .then((data) => setSubcategorias(data));

    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        const productosFiltrados = data.filter(
          (producto) => producto.subcategoria === subcategoria
        );
        setProductosFiltrados(productosFiltrados);
      });

    if (subcategoria) {
      setTablaVisible(true);
      setAgregarAcuerdoVisible(true);
    } else {
      setTablaVisible(false);
      setAgregarAcuerdoVisible(false);
    }
  }, [subcategoria]);

  const handleAgregarAcuerdoClick = () => {
    setNuevosProductos([{ proveedor: '', facing: '' }]);
  };

  const handleAgregarFila = () => {
    setNuevosProductos([...nuevosProductos, { proveedor: '', facing: '' }]);
  };

  const handleGuardarNuevosProductos = () => {
    const productosActualizados = [...productos, ...nuevosProductos];
    fetch('/productos.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productosActualizados),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Nuevos productos guardados:', data);
        setProductos(productosActualizados);
        setNuevosProductos([]);
      });
  };

  return (
    <div>
      <NavegacionSubcategorias subcategorias={subcategorias} />
      <h2>{subcategoria}</h2>
      {agregarAcuerdoVisible && (
        <button onClick={handleAgregarAcuerdoClick} className="btn btn-primary">
          Agregar acuerdo
        </button>
      )}
      {tablaVisible && productosFiltrados.length > 0 && <TablaProductos productos={productosFiltrados} />}
      {nuevosProductos.length > 0 && (
        <div>
          <TablaProductos productos={nuevosProductos} onProductosChange={setNuevosProductos} />
          <button onClick={handleAgregarFila}>Agregar fila</button>
          <button onClick={handleGuardarNuevosProductos}>Guardar cambios</button>
        </div>
      )}
    </div>
  );
}

export default Salon;
