import React from 'react';
import Item from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <div className="row" style={{ marginTop: '100px' }}>
      {productos.map((producto) => (
        <Item key={producto.id}  producto={producto} />
      ))}
    </div>
  )
}

  
