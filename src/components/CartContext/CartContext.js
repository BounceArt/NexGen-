import React, { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const carritoAlmacenado = JSON.parse(localStorage.getItem("carrito")) || []
  const [carrito, setCarrito] = useState(carritoAlmacenado);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  const agregarProducto = (nuevoProducto) => {
    const productoAgregado = { ...nuevoProducto, precio: parseFloat(nuevoProducto.precio), cantidad: nuevoProducto.cantidad || 1, }
    const productoEnElCarrito = carrito.find((prod) => prod.id === productoAgregado.id)
    
    if (productoEnElCarrito) {
      console.log("Este producto ya se encuentra en el carrito");
    } else {
      setCarrito((prevCarrito) => [...prevCarrito, productoAgregado])
    }
  }

  const productoCantidad = () => {
    return carrito.reduce((acc, prod) => acc + parseInt(prod.cantidad, 10), 0)
    
  }
  
  const precioFinal = () => {
    return carrito.reduce((acc, prod) => acc + parseFloat(prod.precio) * parseInt(prod.cantidad), 0)
  }

  const carritoVaciar = () => {
    setCarrito([])
  }

  return (
    <CartContext.Provider value={{ carrito, agregarProducto, productoCantidad, precioFinal, carritoVaciar }}>
      {children}
    </CartContext.Provider>
  )
}