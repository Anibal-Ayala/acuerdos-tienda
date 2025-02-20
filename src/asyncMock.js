export const getSubcategorias = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          "whiskys importados",
          "bebidas",
          "isotonicos",
        ]);
      }, 1000);
    });
  };