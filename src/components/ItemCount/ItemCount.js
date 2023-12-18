import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({producto}) => {
 const [contador, setContador] = useState(1)

 const sumarProducto =() => {
  if(contador < producto.stock)
  setContador(contador + 1)
 }

 const restarProducto = () => {
  if (producto && contador > 1){
    setContador(contador - 1)
  }
 }
return (
    <><div className='contador'>{contador}</div>
    <div>
    <a className="waves-effect waves-light btn-small" onClick={sumarProducto}>Agregar</a>
    <a className="waves-effect waves-light btn-small" onClick={restarProducto}>Sacar</a>
      </div></>
  )
}
export default ItemCount