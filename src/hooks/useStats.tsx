import axios from "axios";
import { useEffect, useState } from "react";

export interface PokemonData {
  data: {
    name: "";
    sprites: {
      front_default: "";
    };
    id: "";
  };
}

export default function useStats(url: {url: string}) {
  const [pokemon, setPokemon] = useState<PokemonData>();

  useEffect(() => {
    let mounted = true;
    async function getPokemon() {
        const data = await axios(
          `https://pokeapi.co/api/v2/pokemon/${url.url}`
        );
          setPokemon(data);
        
    }
    getPokemon();
    return function cleanup() {
      mounted = false;
    };
  }, [url]);
  return { pokemon };
}
