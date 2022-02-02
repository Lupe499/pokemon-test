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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    async function getPokemon() {
      try {
        const data = await axios(
          `https://pokeapi.co/api/v2/pokemon/${url.url}`
        );
        if (mounted) {
          setPokemon(data);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }
    getPokemon();
    return function cleanup() {
      mounted = false;
    };
  }, [url]);
  return { pokemon, loading, error };
}
