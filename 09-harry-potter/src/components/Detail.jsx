import { useEffect, useState } from "react";

export default function Detail({ id, closeHandler }) {
  const [personaje, setPersonaje] = useState({});
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => data[0])
      // .then(data => console.log(data))
      .then((personajeAPI) => setPersonaje(personajeAPI));
  }, [id]);

  return (
    <div
      style={{
        backgroundColor: "dimGray",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Detail</h2>
      <button onClick={closeHandler}>Cerrar Detalle</button>
      <h3>Nombre: {personaje?.name}</h3>
      <h4>House: {personaje?.house}</h4>
      <h4>Especie: {personaje.species}</h4>
      <h4>Nacimiento: {personaje.dateOfBirth}</h4>
      <img
        src={personaje.image}
        alt={personaje.name}
        style={{ height: "200px" }}
      />
    </div>
  );
}
