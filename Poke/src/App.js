import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navi from "./page/Navi";
import Ulubione from "./page/Ulubione";
import Arena from "./page/Arena";

import PokemonList from "./page/PokemonList";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon2, setPokemon2] = useState(null);
  const DB_URL = `http://localhost:3000`;
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;
  console.log("pokemon", pokemon2);
  return (
    <div>
      <Switch>
        <Router>
          <Navi />
          <Route path="/" exact>
            <PokemonList
              pokemon2={pokemon2}
              setPokemon2={setPokemon2}
              BASE_URL={BASE_URL}
            />
          </Route>
          {pokemon2?.results?.map((item) => (
            <Route path={`/${item.name}`}>
              <PokemonCard url={item.url} DB_URL={DB_URL} />
            </Route>
          ))}
          <Route path="/ulubione">
            <Ulubione DB_URL={DB_URL} BASE_URL={BASE_URL} />
          </Route>
          <Route path="/arena">
            <Arena DB_URL={DB_URL} BASE_URL={BASE_URL} />
          </Route>
        </Router>
      </Switch>
    </div>
  );
}

export default App;
