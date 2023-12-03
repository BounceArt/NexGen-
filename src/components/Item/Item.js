import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="col s12 m6 l4" key={producto.id}>
      <div className="card">
        <div className="card-image">
          <img src={producto.imagen} alt="imagen" />
        </div>
        <div className="card-content">
          <span>{producto.nombre}</span>
          <p>ARS${producto.precio}</p>
        </div>
        <div className="card-action">
          <Link to={`/item/${producto.id}`}>Ver producto</Link>
        </div>
      </div>
    </div>
  )
}

export default Item
