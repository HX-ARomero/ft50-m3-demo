export default function Card({ personaje, clickHandler }) {
  //* props = { personaje: { name, house }, clickHandler }
  // console.log(props);
  return (
    <div>
      <h2>Personaje: {personaje.name}</h2>
      <h3>Casa: {personaje.house}</h3>
      <button onClick={() => clickHandler(personaje.id)} >Ver Detalle</button>
    </div>
  )
} 