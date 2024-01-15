import React, { useEffect, useState,} from 'react';
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
  
        const docRef = doc(db, 'Productos', id)
        const resp = await getDoc(docRef)
  
        if (resp.exists()) {
          
          setProducto({
            ...resp.data(),
            id: resp.id,
          })
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error)
      }
    }
  
    fetchData()
  }, [id])
  

  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

