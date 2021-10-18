import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navi from "./page/Navi";
import Ulubione from "./page/Ulubione";
import Arena from "./page/Arena";

import PokemonList from "./page/PokemonList";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon2, setPokemon2] = useState(null);
  console.log("pokemon", pokemon2);
  return (
    <div>
      <Router>
        <Navi />
        <Route path="/" exact>
          <PokemonList setPokemon2={setPokemon2} />
        </Route>
        {pokemon2?.results?.map((item) => (
          <Route path={`/${item.name}`}>
            <PokemonCard url={item.url} isFavorite={item.isFavorite} />
          </Route>
        ))}
        <Route path="/ulubione">
          <Ulubione />
        </Route>
        <Route path="/arena">
          <Arena />
        </Route>
      </Router>
    </div>
  );
}

export default App;
