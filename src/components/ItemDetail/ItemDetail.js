import React from 'react';
import "./ItemDetail.css"
const ItemDetail = ({ producto }) => {
  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='contenedor'>
      <div className='contenido'>
        <img className="imagen-producto" src={producto.imagen} alt={producto.nombre}></img>
        <div>
          <h4 className='titulo'>{producto.nombre}</h4>
          <p>{producto.descripcion}</p>
          <p>ARS${producto.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
