import React, { useEffect, useState,} from 'react';
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import Json from "../Json/productos.json";const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await traerProductoPorId(id)
        setProducto(data);
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchProducto()
  }, [id])

  const traerProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
      const productoEncontrado = Json.find(item => item.id === id)
      resolve(productoEncontrado)
    })
  }

  return (
    <div>
        <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer