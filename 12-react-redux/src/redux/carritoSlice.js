import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const carritoSlice = createSlice({
  //* Nombre del SLICE
  name: "carrito",
  //* Estado Inicial:
  initialState,
  //* Reducer (Administrador de la lista):
  //* Necesita STATE y ACTION
  reducers: {
    
    //* action = { type: "agregarProducto", payload: {..}}
    agregarProducto: (state, action) => {
      state.push(action.payload);
    },

    //* action = { type: "agregarProducto", payload: title}
    quitarProducto: (state, action) => {
      return state.filter((producto) => producto.title !== action.payload);
    },
  },
});
//* carritoSlice = {
//*   actions: { agregarProducto, quitarProducto },
//*   reducer: REDUCER
//* }
export const { agregarProducto, quitarProducto } = carritoSlice.actions;
export default carritoSlice.reducer;
