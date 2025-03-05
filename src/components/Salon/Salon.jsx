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
      nombre: "Producto 4",
      subcategoria: "JUGOS",
      proveedor: "CONAPROLE",
      facing: "15%",
    },

    {
      nombre: "Producto 5",
      subcategoria: "JUGOS",
      proveedor: "MILOTUR",
      facing: "15%",
    },


    {
      nombre: "Producto 6",
      subcategoria: "JUGOS",
      proveedor: "FORTYLEX",
      facing: "20%",
    },
    {
      nombre: "Producto 7 ",
      subcategoria: "GASEOSAS",
      proveedor: "MONTEVIDEO REFRESCOS",
      facing: "80%",
    },



    {
      nombre: "Producto 8",
      subcategoria: "GASEOSAS",
      proveedor: "FNC",
      facing: "20%",
    },

    {
      nombre: "Producto 10",
      subcategoria: "CERVEZAS",
      proveedor: "FNC",
      facing: "60%",
    },

    {
      nombre: "Producto 11",
      subcategoria: "CERVEZAS",
      proveedor: "MILOTUR",
      facing: "15%",
    },


    {
      nombre: "Producto 12",
      subcategoria: "AGUAS",
      proveedor: "COMPAÑIA SALUS",
      facing: "60%",
    },

    {
      nombre: "Producto 13",
      subcategoria: "AGUAS",
      proveedor: "MILOTUR",
      facing: "20%",
    },

    {
      nombre: "Producto 14",
      subcategoria: "AGUAS",
      proveedor: "MONTEVIDEO REFRESCOS",
      facing: "10%",
    },

    {
      nombre: "Producto 15",
      subcategoria: "AGUAS SABORIZADAS",
      proveedor: "COMPAÑIA SALUS",
      facing: "70%",
    },


    {
      nombre: "Producto 16",
      subcategoria: "AGUAS SABORIZADAS",
      proveedor: "MONTEVIDEO REFRESCOS",
      facing: "15%",
    },

    {
      nombre: "Producto 17",
      subcategoria: "VINOS",
      proveedor: "ALMENA",
      facing: "22%",
    },


    {
      nombre: "Producto 18",
      subcategoria: "ISOTÓNICOS",
      proveedor: "FNC",
      facing: "70%",
    },

    {
      nombre: "Producto 19",
      subcategoria: "ISOTÓNICOS",
      proveedor: "MILOTUR",
      facing: "15%",
    },

    {
      nombre: "Producto 20",
      subcategoria: "ISOTÓNICOS",
      proveedor: "MONTEVIDEO REFRESCOS",
      facing: "15%",
    },

    {
      nombre: "Producto 21",
      subcategoria: "SUSTITUTOS DE LECHE",
      proveedor: "FORT MASIS",
      facing: "45%",
    },


    {
      nombre: "Producto 22",
      subcategoria: "SUSTITUTOS DE LECHE",
      proveedor: "FORTYLEX",
      facing: "20%",
    },


    {
      nombre: "Producto 23",
      subcategoria: "RON",
      proveedor: "PERNOD RICARD",
      facing: "35%",
    },


    {
      nombre: "Producto 24",
      subcategoria: "RON",
      proveedor: "DIAGEO",
      facing: "15%",
    },


    {
      nombre: "Producto 25",
      subcategoria: "VODKA",
      proveedor: "PERNOD RICARD",
      facing: "35%",
    },



    {
      nombre: "Producto 26",
      subcategoria: "VODKA",
      proveedor: "DIAGEO",
      facing: "40%",
    },

    {
      nombre: "Producto 27",
      subcategoria: "GIN",
      proveedor: "PERNOD RICARD",
      facing: "20%",
    },



    {
      nombre: "Producto 28",
      subcategoria: "GIN",
      proveedor: "DIAGEO",
      facing: "45%",
    },

    {
      nombre: "Producto 29",
      subcategoria: "ENERGIZANTES",
      proveedor: "MONTEVIDEO REFRESCOS",
      facing: "50%",
    },


    {
      nombre: "Producto 30",
      subcategoria: "ENERGIZANTES",
      proveedor: "MOLDES RUIBAL",
      facing: "20%",
    },

    {
      nombre: "Producto 31",
      subcategoria: "WHISKY STANDARD",
      proveedor: "PERNOD RICARD",
      facing: "20%",
    },
    {
      nombre: "Producto 32",
      subcategoria: "WHISKY STANDARD",
      proveedor: "DIAGEO",
      facing: "60%",
    },

    {
      nombre: "Producto 33",
      subcategoria: "WHISKY STANDARD",
      proveedor: "ALMENA",
      facing: "7%",
    },



    {
      nombre: "Producto 34",
      subcategoria: "WHISKY 12 AÑOS",
      proveedor: "PERNOD RICARD",
      facing: "35%",
    },



    {
      nombre: "Producto 35",
      subcategoria: "WHISKY 12 AÑOS",
      proveedor: "DIAGEO",
      facing: "55%",
    },



    {
      nombre: "Producto 36",
      subcategoria: "WHISKY DELUXE",
      proveedor: "PERNOD RICARD",
      facing: "40%",
    },



    {
      nombre: "Producto 37",
      subcategoria: "WHISKY DELUXE",
      proveedor: "DIAGEO",
      facing: "45%",
    },


    {
      nombre: "Producto 38",
      subcategoria: "VINOS ESPUMOSOS",
      proveedor: "ALMENA",
      facing: "35%",
    },


    {
      nombre: "Producto 39",
      subcategoria: "YERBA",
      proveedor: "",
      facing: "",
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