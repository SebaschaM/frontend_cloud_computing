const useFetch = () => {
  const getProfile = async (token) => {
    console.log(token);
    try {
      const response = await fetch(
        "http://3.87.161.115:3000/api/auth/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error al obtener los datos del usuario");
      }
    } catch (error) {
      throw new Error("Error de conexión");
    }
  };
  //LISTADO ORDERS
  const getOrderList = async (userId) => {
    const response = await fetch(
      `http://3.87.161.115:3000/api/order/${userId}`,
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
      throw new Error("Error al obtener el Order por usuario");
    }
  };
  //LISTADO DE SUCURSALES
  const getBranchList = async () => {
    try {
      const response = await fetch("http://3.87.161.115:3000/api/branch", {
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

  const getProductByBranch = async (branchId) => {
    const response = await fetch(
      `http://3.87.161.115:3000/api/product/${branchId}`,
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

  const getDetailProduct = async (productId) => {
    const response = await fetch(
      `http://3.87.161.115:3000/api/product/find/${productId}`,
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

  const getCategoryList = async () => {
    const response = await fetch(
      "http://3.87.161.115:3000/api/product/findAll/category",
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
  /*
  const getProductByCategoryByBranch = async (categoryId, branchId) => {
    const response = await fetch(
      `http://3.87.161.115:3000/api/product/find/category/${categoryId}?idBranch=${branchId}`,
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
*/
  return {
    getBranchList,
    getProductByBranch,
    getDetailProduct,
    getCategoryList,
    getProfile,
    getOrderList,
    //getProductByCategoryByBranch,
  };
};

export default useFetch;
