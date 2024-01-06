import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';


export const CartWidget = () => {
  const { carrito } = useContext(CartContext)


  return (
    <div className="carrito-container">
      <ul>
        <li className="carrito">
          <Link className="link" to="/carrito">
            Carrito <span className="numerito right">{carrito.length}</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CartWidget;
