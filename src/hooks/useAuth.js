import { json } from "react-router-dom";

function useAuth() {
  async function Login(email, password) {
    try {
      const response = await fetch(
        "https://cloud-computing-back.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = response.json();
      if (data.token !== "") {
        return data;
      }
    } catch (error) {
      throw new Error("Error de conexión");
    }
  }

  async function Register(fullname, email, password, phone) {
    try {
      const response = await fetch(
        "https://cloud-computing-back.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: fullname,
            email: email,
            password: password,
            phone: phone,
          }),
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error de conexión");
    }
  }

  async function ActualizarPerfil(body, token) {
    try {
      const response = await fetch(
        "https://cloud-computing-back.onrender.com/api/auth/updateprofile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error de conexión");
    }
  }

  async function CrearOrder(order) {
    try {
      const response = await fetch(
        "https://cloud-computing-back.onrender.com/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error de conexión");
    }
  }
  return { Login, Register, ActualizarPerfil, CrearOrder };
}

export { useAuth };
