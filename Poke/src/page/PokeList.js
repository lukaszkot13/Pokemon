import axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

import Pokemon from "../components/Pokemon";
import PokemonThumb from "../components/PokemonThub";

const useStyles = makeStyles({
  pageContainer: {
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    "min-height": "100vh",
    padding: "3rem 0.5rem",
  },
  pokemonContainer: {
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
  },
  allContainer: {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "center",
    "justify-content": "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "border-radius": "2px",
    color: "#444",
    padding: "0.5rem 1.5rem",
    "min-width": "50%",
    "margin-top": "1rem",
  },
  input: {
    "box-sizing": "border-box",
    "font-size": "1rem",
    padding: "1rem",
    display: "block",
    margin: "2rem auto",
  },
});

function PokeList() {
  const classes = useStyles();
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
      });
  }, [pageValue]);

  return (
    <div>
      <input
        className={classes.input}
        type="text"
        placeholder="Wyszukaj Pokemona"
      />
      <div className={classes.pageContainer}>
        <div className={classes.pokemonContainer}>
          <div className={classes.allContainer}>
            {pokemon?.results
              ?.filter((item, index) => index < 15)
              .map(({ url }, index) => (
                <PokemonThumb
                  url={url}
                  // key={index}
                  // id={id}
                  // image={pokemonStats.sprites.other.dream_world.front_default}
                  //   name={pokemonStats.name}
                  // type={pokemonStats.types[0].type.name}
                  // height={pokemonStats.height}
                  //   weight={pokemonStats.weight}
                  // ability={pokemonStats.abilities[0].ability.name}
                  // baseExperience={pokemonStats.base_experience}
                />
              ))}
          </div>
          <div className={classes.button}>
            <button>Poprzednia strona</button>
            <button>Następna strona</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokeList;
