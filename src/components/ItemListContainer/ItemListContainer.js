import { useEffect, useState } from "react";
import Json from "../Json/productos.json";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  const traerProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(Json);
    });
  };

  useEffect(() => {
    traerProductos().then((res) => {
      const productosFiltrados = categoria
        ? res.filter((item) => item.categoria === categoria)
        : res;
      setProductos(productosFiltrados);
    });
  }, [categoria]);

  return (
    <div>
      <h1 className="titulo-catalogo">{categoria ? categoria : "Catálogo"}</h1>
      <ItemList productos={productos} />
    </div>
  );
};


