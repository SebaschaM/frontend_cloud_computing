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

  return { getBranchList, getProductByBranch };
};

export default useFetch;
