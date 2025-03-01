import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavegacionSubcategorias from "../NavegaciónSubcategorias/NavegacionSubcategorias";
import TablaProductos from "../Salon/TablaProductos"; // Importa TablaProductos desde la carpeta components
import { getSubcategorias } from "../../asyncMock";

function Salon() {
  const { subcategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [tablaVisible, setTablaVisible] = useState(false);
  const [productosEditados, setProductosEditados] = useState([]);
  useEffect(() => {
    getSubcategorias().then((data) => setSubcategorias(data));

    // Datos de ejemplo para los productos (reemplazar con datos reales)
    const productosDeEjemplo = [
      {
        nombre: "Producto 1",
        subcategoria: "JUGOS",
        proveedor: "FORT MASIS",
        facing: "10%",
      },
      {
        nombre: "Producto 2",
        subcategoria: "JUGOS",
        proveedor: "MONTEVIDEO REFRESCOS",
        facing: "10%",
      },
      {
        nombre: "Producto 3",
        subcategoria: "JUGOS",
        proveedor: "NOLIR",
        facing: "15%",
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

    ];

    const productosFiltrados = productosDeEjemplo.filter(
      (producto) => producto.subcategoria === subcategoria
    );
    setProductosFiltrados(productosFiltrados);
    setProductos(productosDeEjemplo);
    setProductosEditados( productosFiltrados.map(producto  => ({ ...producto })));
    if (subcategoria) {
      setTablaVisible(true);
    } else {
      setTablaVisible(false);
    }
  }, [subcategoria]);

  return (
    <div>
      <NavegacionSubcategorias subcategorias={subcategorias} />
      <h2>{subcategoria}</h2>
      {tablaVisible && productosFiltrados.length > 0 && (
        <TablaProductos productos={productosFiltrados} />
      )}
    </div>
  );
}

export default Salon;
