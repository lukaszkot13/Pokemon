import axios from "axios";
import { useEffect, useState } from "react";

import PokemonThumb from "../components/PokemonThub";

function PokeList() {
  // const [chars, setChars] = useState(null)
  const [pokemon, setPokemon] = useState();
  const [limitValue, setLimitValue] = useState(15);
  const [pageValue, setPageValue] = useState(0);
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;

  useEffect(() => {
    axios
      .get(`${BASE_URL}?limit=${limitValue}&offset=${pageValue}`)
      .then((response) => {
        console.log("dane", response.data);
        setPokemon(response.data);
        // setChars(response.data)
      })
      .catch((error) => console.log(error));
  }, [pageValue]);

  if (!pokemon) {
    alert("Loading");
  }

  const prevPage = () => {
    if (pageValue === 0) {
      alert("To pierwsza strona!");
      return;
    }

    setPageValue(pageValue - 16);
    setLimitValue(15);
  };
  const nextPage = () => {
    if (pageValue === 0) {
      alert("zmiana!");
      return;
    }

    setPageValue(pageValue + limitValue);
    setLimitValue(15);
  };
  return (
    <div>
      {limitValue
        .filter((item, index) => index < 15)
        .map((pokemonStats, index) => (
          <PokemonThumb
            key={index}
            id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
            type={pokemonStats.types[0].type.name}
            height={pokemonStats.height}
            weight={pokemonStats.weight}
            ability={pokemonStats.abilities[0].ability.name}
            baseExperience={pokemonStats.base_experience}
          />
        ))}
    </div>
  );
}
export default PokeList;
