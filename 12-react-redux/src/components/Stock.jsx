import React from "react";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../redux/carritoSlice";

function Stock() {
  const dispatch = useDispatch();

  let id = 1;
  const handleClick = () => {
    fetch(`https://fakestoreapi.com/products/${id++}`)
      .then((response) => response.json())
      .then((apiProduct) => {
        dispatch(agregarProducto(apiProduct));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Productos en Stock</h2>

      <button onClick={handleClick}>Producto desde API</button>

      <button
        onClick={() => {
          dispatch(
            agregarProducto({
              title: "Monitor",
              price: 300,
            })
          );
        }}
      >
        Monitor - U$D 300
      </button>
      <br />

      <button
        onClick={() => {
          dispatch(
            agregarProducto({
              title: "Notebook",
              price: 400,
            })
          );
        }}
      >
        Notebook - U$D 400
      </button>
    </div>
  );
}

export default Stock;
