import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [titulo] = useState("Productos")
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "Productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        )
        
        
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error)
      })
  }, [categoria])

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}