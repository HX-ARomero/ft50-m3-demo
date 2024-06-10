import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const GETCHARACTERBYID_URL = "https://dragonball-api.com/api/characters/";

export default function Detail(props) {
  const { id } = useParams();
  // console.log(id);

  //* Creamos estado local:
  const [character, setCharacter] = useState({});

  //* Obtenemos personaje desde la API:
  useEffect(() => {
    axios
      .get(GETCHARACTERBYID_URL + id)
      .then(({ data }) => data)
      .then((characterById) => setCharacter(characterById))
      .catch((error) => console.log(error.message));
  }, []);

  //* Vaciar estado al salir del componente
  useEffect(
    () => () => {
      setCharacter({});
    },
    []
  );

  return (
    <div className={styles.container}>
      <h2>Detalle</h2>
      <hr />
      <h3>Nombre: {character?.name}</h3>
      <h4>Ki: {character?.ki}</h4>
      <h4>Género: {character?.gender}</h4>
      <h4>Raza: {character?.race}</h4>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
}
