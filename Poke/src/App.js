import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navi from "./page/Navi";
import Ulubione from "./page/Ulubione";
import Arena from "./page/Arena";

import PokeList from "./page/PokeList";
import PokemonThumb from "./components/PokemonThub";

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <div>
      <Router>
        <Navi />
        <Route path="/" exact>
          <PokeList setPokemon={setPokemon} />
        </Route>
        {pokemon?.map((item) => (
          <Router path={`/${item.name}`}>{PokemonThumb}</Router>
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
