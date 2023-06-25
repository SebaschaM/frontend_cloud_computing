const useFetch = () => {
  const getBranchList = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/branch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error al obtener la lista de sucursales");
      }
    } catch (error) {
      throw new Error("Error de conexión");
    }
  };

  //PRODUCTS
  const getProductByBranch = async (branchId) => {
    const response = await fetch(
      `http://localhost:3000/api/product/${branchId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error al obtener la lista de productos");
    }
  };

  //FALTA
  const getDetailProduct = async (productId) => {
    const response = await fetch(
      `http://localhost:3000/api/product/find/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error al obtener el detalle del producto");
    }
  };

  //FALTA
  const getCategoryList = async () => {
    const response = await fetch(
      "http://localhost:3000/api/product/findAll/category",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error al obtener la lista de categorias");
    }
  };

  return {
    getBranchList,
    getProductByBranch,
    getDetailProduct,
    getCategoryList,
  };
};

export default useFetch;
