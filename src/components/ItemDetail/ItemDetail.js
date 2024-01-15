import React, { useContext, useState } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(0)

  const cartContext = useContext(CartContext);
  const { carrito, agregarProducto} = cartContext;
  
  if (!producto) {
    return <p>Cargando</p>
  }

  const cantidadProducto = (nuevaCantidad) => {
    setCantidad(nuevaCantidad)
  }

  const agregarAlCarrito = () => {
    const productoAgregado = { ...producto, cantidad }
    const productoEnCarrito = carrito.find((prod) => prod.id === productoAgregado.id)

    if (productoEnCarrito) {
      console.log("Este producto ya se encuentra en el carrito")
    } else {    
      agregarProducto(productoAgregado);
    }
  }

  return (
    <div className='contenedor'>
      <div className='contenido'>
        <img className="imagen-producto" src={producto.imagen} alt={producto.nombre}></img>
        <div>
          <h4 className='titulo'>{producto.titulo}</h4>
          <p>{producto.descripcion}</p>
          <hr />
          <p>ARS${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
          <hr />
          <ItemCount
            producto={producto}
            onCantidadChange={cantidadProducto}
          />
          <a
            className="waves-effect waves-light btn"
            onClick={agregarAlCarrito}
          >
            Agregar al carrito
          </a>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
