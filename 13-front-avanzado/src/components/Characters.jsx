import React from "react";
import useFetch from "../hooks/useFetch";

// const API_URL = "https://rickandmortyapi.com/api/character";

function Characters() {
  const { data, error } = useFetch("location");

  return (
    <div>
      <h2>Personajes</h2>
      {data?.results.map((character) => (
        <div key={character.name}>
          <p>{character.name}</p>
          {/* <img src={character.image} alt={character.name} /> */}
        </div>
      ))}
    </div>
  );
}

export default Characters;
