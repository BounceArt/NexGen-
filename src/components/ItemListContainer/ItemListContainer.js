import { useEffect, useState } from "react"
import Json from "../Json/productos.json"
import "./ItemListContainer.css"
export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const traerProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(Json)
    })
  }

  useEffect(() => {
    traerProductos().then((res) => {
      setProductos(res)
    })
  }, [])

  return (
    <div className="row" style={{ marginTop: '100px' }}>
  {productos.map((producto) => (
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
          <a href="#">Ver producto</a>
        </div>
      </div>
    </div>
  ))}
</div>

  )
}
