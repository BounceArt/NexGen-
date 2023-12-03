import { useEffect, useState } from "react";
import Json from "../Json/productos.json";
import "./ItemListContainer.css";
import {ItemList} from "../ItemList/ItemList"; 

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

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
    <div>
      <h1 className="titulo-catalogo">Catálogo</h1>
      <ItemList productos={productos} />
    </div>
  )
}

