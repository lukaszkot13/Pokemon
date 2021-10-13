import axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
    "border-radius": "5px",
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

function PokeList({ setPokemon2, pokemon2 }) {
  const history = useHistory();
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
        setPokemon2(response.data);
      });
  }, [pageValue]);

  console.log("pokemon", pokemon);
  console.log("pokemon2", pokemon2);

  const prevPage = () => {
    if (pageValue === 0) {
      alert("Jesteś na pierwszej stronie ");
      return;
    }
    setPageValue(pageValue - 15);
    setLimitValue(15);
  };

  const nextPage = () => {
    if (pageValue === 150) {
      alert("Jesteś na ostatnoej stronie");
      return;
    } else if (pageValue === 135) {
      setLimitValue(1);
    }
    setPageValue(pageValue + 15);
  };
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
                  key={index}
                  onClick={() => history.push(`/${pokemon.name}`)}
                />
              ))}
          </div>
          <div className={classes.button}>
            <button onClick={prevPage}>Poprzednia strona</button>
            <button onClick={nextPage}>Następna strona</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokeList;
