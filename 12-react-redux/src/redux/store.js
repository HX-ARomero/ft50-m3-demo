import carritoSlice from "./carritoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  //* Quién es el Administrador (REDUCER)
  reducer: {
    carrito: carritoSlice,
  },
});

export default store;