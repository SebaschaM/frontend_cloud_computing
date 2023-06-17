import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Carrito,
  Home,
  Login,
  Pedido,
  Pedido_Activo,
  Pedido_Complete,
  Product,
  Register,
  Perfil,
  Perfil_Actualizar,
} from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Product />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pedidos" element={<Pedido />} />
        <Route path="/pedidosActivo" element={<Pedido_Activo />} />
        <Route path="/pedidosComplete" element={<Pedido_Complete />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfilActualizar" element={<Perfil_Actualizar />} />
      </Routes>
    </BrowserRouter>
  );
};
