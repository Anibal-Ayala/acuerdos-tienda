export const getSubcategorias = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          "WHISKY 12 AÑOS",
          "GASEOSAS",
          "ISOTÓNICOS",
          "WHISKY STANDARD",
          "JUGOS",
          "CERVEZAS",
          "AGUAS",
          "AGUAS SABORIZADAS",
          "VINOS",
          "SUSTITUTOS DE LECHE",
          "RON",
          "VODKA",
          "GIN",
          "ENERGIZANTES",
          "WHISKY DELUXE",
          "VINOS ESPUMOSOS",
          "COOLER",
          "YERBA",
          "CAFÉ",
          "POLVOS CHOCOLATADOS",
          "MERMELADAS Y DULCES",
          "AZUCAR Y EDULCORANTES",
          "HUEVOS",
          "ARROZ Y LEGUMBRES",
          "MAYONESAS Y SALSAS",
          "FIDEOS",
          "PULPAS",
          "CONSERVAS",
          "HARINAS Y POLVOS",
          "GALLETAS DULCES",
          "GALLETAS SALADAS",
          "LACTEOS",
          "HAMBURGUESAS Y PIZZAS",
          "PRODUCTOS SALUDABLES"

        ]);
      }, 500);
    });
  };






  export const getCajas = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          'CAJA 1',
          'CAJA 2',
          'CAJA 3',
          'CAJA 4',
          'CAJA 5',
          'CAJA 6',
          'CAJA 7',
          'CAJA 8',
          'CAJA 9',
          'CAJA 10',
          'CAJA 11',
          'CAJA 12',
          'CAJA 13',
          'CAJA 14',
          'CAJA 15',
          'SELF',
        ]);
      }, 1000);
    });
  };
  