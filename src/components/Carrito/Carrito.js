import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

const Carrito = () => {
  const {carrito, precioFinal} = useContext(CartContext)

  return (
    <div className='contenedor-carrito'>
      <h2>Carrito de compras</h2>
      {carrito.lenght === 0 ? (<p>Carrito vacio.</p>) : (
        <div>
          <ul>
          {carrito.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} /> 
            {producto.nombre} - Cantidad: {producto.cantidad} - Precio: ARS${producto.precio * producto.cantidad}
          </li>
            ))}
          </ul>
          <p>Total: ARS${precioFinal()}</p>
          
        </div>
      )}
    </div>
    
  )
}

export default Carrito