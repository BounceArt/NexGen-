import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import "./Carrito.css"
const Carrito = () => {
  const {carrito, precioFinal, carritoVaciar} = useContext(CartContext)

  const handleVaciarCarrito = () => {
    carritoVaciar();
  }

  return (
    <div className='contenedor-carrito'>
      <h2 className='titulo'>Carrito de compras</h2>
      {carrito.length === 0 ? (<p>Carrito vacio.</p>) : (
        <div>
          <ul className='lista-productos'>
          {carrito.map((producto) => (
          <li className='lista-2' key={producto.id}>
            <img className='imagen' src={producto.imagen} alt={producto.nombre} /> 
            {producto.titulo} - Cantidad: {producto.cantidad} - Precio: ARS${producto.precio * producto.cantidad}
          </li>
            ))}
          </ul>
          <li>
            <p className='total'>Total: ARS${precioFinal()}</p>
            <button className='vaciar' onClick={handleVaciarCarrito}>Vaciar</button>
            <button className='comprar'>Comprar</button>
          </li>
        </div>
      )}
    </div>
    
  )
}

export default Carrito