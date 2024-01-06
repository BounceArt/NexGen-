import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (nuevoProducto, cantidad) => {
    const productoAgregado = { ...nuevoProducto, cantidad };
    const productoEnCarrito = carrito.find((prod) => prod.id === productoAgregado.id);

    if (productoEnCarrito) {
      console.log("Este producto ya se encuentra en el carrito");
    } else {
      setCarrito((prevCarrito) => [...prevCarrito, productoAgregado]);
    }
  };

  const productoCantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioFinal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const carritoVaciar = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarProducto, productoCantidad, precioFinal, carritoVaciar }}>
      {children}
    </CartContext.Provider>
  );
};


