import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Carrito, Home, Login, Pedido, Product, Register } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pedidos" element={<Pedido />} />
      </Routes>
    </BrowserRouter>
  );
};
