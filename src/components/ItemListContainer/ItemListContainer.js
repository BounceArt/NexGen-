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
      <ItemList productos={productos} />
    </div>
  )
}

