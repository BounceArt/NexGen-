import React from 'react';
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({ producto }) => {
  if (!producto) {
    return <p>Cargando</p>
  }

    
  return (
    <div className='contenedor'>
      <div className='contenido'>
        <img className="imagen-producto" src={producto.imagen} alt={producto.nombre}></img>
        <div>
          <h4 className='titulo'>{producto.nombre}</h4>
          <p>{producto.descripcion}</p>
          <hr/>
          <p>ARS${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
          <hr/>
          <ItemCount producto={producto}/>
          <a className="waves-effect waves-light btn">Finalizar compra</a>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
