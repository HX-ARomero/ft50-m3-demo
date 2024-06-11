import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quitarProducto } from "../redux/carritoSlice";

function Carrito() {
  //* state = {
  //*   carrito: [ {...}, {...} ],
  //*   users: ...
  //* }

  const productosEnCarrito = useSelector((state) => state.carrito);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Productos en Carrito</h3>
      {!productosEnCarrito.length ? (
        <h3>No hay productos en el carrito</h3>
      ) : (
        productosEnCarrito.map((producto, index) => (
          <p key={index}>
            {producto.title} - U$D {producto.price}
            <button
              onClick={() => dispatch(quitarProducto(producto.title))}
            >X</button>
          </p>
        ))
      )}
    </div>
  );
}

export default Carrito;
