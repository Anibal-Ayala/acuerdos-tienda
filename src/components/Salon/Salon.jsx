
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavegacionSubcategorias from '../NavegaciónSubcategorias/NavegacionSubcategorias';'../NavegaciónSubcategorias/NavegacionSubcategorias'
import TablaProductos from '../Salon/TablaProductos'; // Importa TablaProductos desde la carpeta components
import { getSubcategorias } from '../../asyncMock';

function Salon() {
  const { subcategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
const [productosFiltrados, serProductosFiltrados] = useState ([])
  useEffect(() => {
    getSubcategorias()
      .then((data) => setSubcategorias(data));

    // Datos de ejemplo para los productos (reemplazar con datos reales)
    const productosDeEjemplo = [
      { nombre: "Producto 1", subcategoria: "whiskys importados", proveedor: "Proveedor A", facing: "Frontal" },
      { nombre: "Producto 2", subcategoria: "bebidas", proveedor: "Proveedor B", facing: "Lateral" },
      { nombre: "Producto 3", subcategoria: "isotonicos", proveedor: "Proveedor C", facing: "Frontal" },
    ];

    const productosFiltrados = productosDeEjemplo.filter(
      (producto) => producto.subcategoria === subcategoria
    );
    setProductos(productosFiltrados);
  }, [subcategoria]);

  return (
    <div>
      <NavegacionSubcategorias subcategorias={subcategorias} />
      <h2>{subcategoria}</h2>
      <TablaProductos productos={productosFiltrados} />
    </div>
  );
}

export default Salon;