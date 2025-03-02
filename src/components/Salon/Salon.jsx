import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavegacionSubcategorias from '../NavegaciónSubcategorias/NavegacionSubcategorias'
import TablaProductos from './TablaProductos';
import { getSubcategorias } from '../../asyncmock';

function Salon() {
  const { subcategoria } = useParams();
  const [productos, setProductos] = useState([
    {
      nombre: 'Producto 1',
      subcategoria: 'JUGOS',
      proveedor: 'FORT MASIS',
      facing: '10%',
    },
    {
      nombre: 'Producto 2',
      subcategoria: 'JUGOS',
      proveedor: 'MONTEVIDEO REFRESCOS',
      facing: '10%',
    },
    {
      nombre: 'Producto 3',
      subcategoria: 'JUGOS',
      proveedor: 'NOLIR',
      facing: '15%',
    },
    {
      nombre: 'Producto 4',
      subcategoria: 'JUGOS',
      proveedor: 'CONAPROLE',
      facing: '15%',
    },
    {
      nombre: 'Producto 5',
      subcategoria: 'JUGOS',
      proveedor: 'MILOTUR',
      facing: '15%',
    },
    {
      nombre: 'Producto 6',
      subcategoria: 'JUGOS',
      proveedor: 'FORTYLEX',
      facing: '20%',
    },
    {
      nombre: 'Producto 7',
      subcategoria: 'GASEOSAS',
      proveedor: 'MONTEVIDEO REFRESCOS',
      facing: '80%',
    },
  ]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [tablaVisible, setTablaVisible] = useState(false);
  const [agregarAcuerdoVisible, setAgregarAcuerdoVisible] = useState(false);
  const [nuevosProductos, setNuevosProductos] = useState([]);

  useEffect(() => {
    getSubcategorias().then((data) => setSubcategorias(data));

    const productosFiltrados = productos.filter(
      (producto) => producto.subcategoria === subcategoria
    );
    setProductosFiltrados(productosFiltrados);

    if (subcategoria) {
      setTablaVisible(true);
      setAgregarAcuerdoVisible(true);
    } else {
      setTablaVisible(false);
      setAgregarAcuerdoVisible(false);
    }
  }, [subcategoria, productos]);

  const handleAgregarAcuerdoClick = () => {
    setProductosFiltrados([
      ...productosFiltrados,
      {
        nombre: `Nuevo Proveedor ${productosFiltrados.length + 1}`,
        subcategoria: subcategoria,
        proveedor: '',
        facing: '',
      },
    ]);
  };

  const handleGuardarNuevosProductos = () => {
    const productosActualizados = [...productos]; // Crear una copia del array productos
    const productosSubcategoriaActual = productosActualizados.filter(
      (producto) => producto.subcategoria === subcategoria
    );
    const productosSubcategoriaActualActualizados = productosSubcategoriaActual.map(
      (producto) => {
        const productoFiltrado = productosFiltrados.find(
          (p) => p.nombre === producto.nombre
        );
        return productoFiltrado || producto;
      }
    );
    productosActualizados.forEach((producto, index) => {
      if (producto.subcategoria === subcategoria) {
        productosActualizados[index] =
          productosSubcategoriaActualActualizados.find(
            (p) => p.nombre === producto.nombre
          ) || producto;
      }
    });
    setProductos(productosActualizados);
  };

  return (
    <div>
      <NavegacionSubcategorias subcategorias={subcategorias} />
      <h2>{subcategoria}</h2>
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        {agregarAcuerdoVisible && (
          <button onClick={handleAgregarAcuerdoClick} className="btn btn-primary">
            Agregar acuerdo
          </button>
        )}
      </div>
      {tablaVisible && productosFiltrados.length > 0 && (
        <TablaProductos productos={productosFiltrados} onProductosChange={setProductos} />
      )}
    </div>
  );
}

export default Salon;
