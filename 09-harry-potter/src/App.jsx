import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Detail from "./components/Detail";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);

  function clickHandler(id) {
    setId(id);
    setDetail(true);
  }
  function closeHandler() {
    setDetail(false);
  }

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((respuesta) => respuesta.json())
      .then((data) => data.slice(0, 5))
      .then((personajesAPI) => {
        // console.log(personajesAPI);
        setPersonajes(personajesAPI);
      });
  }, []);

  return (
    <>
      <h1>React LifeCycle</h1>
      <hr />
      {
        personajes.map(personaje => (
          <Card key={personaje.id} personaje={personaje} clickHandler={clickHandler} />
        ))
      }
      {detail && <Detail id={id} closeHandler={closeHandler} />}
    </>
  );
}

export default App;
