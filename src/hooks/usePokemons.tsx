import axios from "axios";
import { useEffect, useState } from "react";

export function usePokemons({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) {
  const [allPokemons, setAllPokemons] = useState([]);
  

  useEffect(() => {
    async function getPokemons() {
      const data = await axios(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      );
      

      setAllPokemons(data.data.results);
    }

    getPokemons();
  }, [limit, offset]);

  const convertedPokemons = allPokemons.reduce((acc, post) => {
    let { url, name } = post;
    return { ...acc, [name]: [...(acc[name] || []), url] };
  }, {});
  console.log(convertedPokemons);


  return { convertedPokemons, allPokemons };
}
