import React, { useEffect, useState } from "react";
import {
  getCharacters,
  getEpisodes,
  getLocations,
} from "../services/apiService";

function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fethData = async () => {
      try {
        if (endpoint === "character") {
          const characters = await getCharacters();
          setData(characters);
        } else if (endpoint === "episode") {
          const episodes = await getEpisodes();
          setData(episodes);
        } else if (endpoint === "location") {
          const locations = await getLocations();
          setData(locations);
        }
      } catch (error) {
        setError(error);
      }
    };
    fethData();
  }, [endpoint]);

  return { data, error };
}

export default useFetch;
