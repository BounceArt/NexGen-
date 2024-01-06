import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({producto, onCantidadChange}) => {
 const [contador, setContador] = useState(1)

 const sumarProducto =() => {
  if(contador < producto.stock)
  setContador(contador + 1)
  onCantidadChange(contador + 1)
 }

 const restarProducto = () => {
  if (producto && contador > 1){
    setContador(contador - 1)
    onCantidadChange(contador - 1)
  }
 }
return (
    <><div className='contador'>{contador}</div>
    <div>
    <a className="waves-effect waves-light btn-small" onClick={restarProducto} disabled={contador === 1}>Sacar</a>
    <a className="waves-effect waves-light btn-small" onClick={sumarProducto} disabled={contador === producto.stock}>Agregar</a>
      </div></>
  )
}
export default ItemCount