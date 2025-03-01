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