import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navi from "./page/Navi";
import Ulubione from "./page/Ulubione";
import Arena from "./page/Arena";

import ListaPokemonow from "./page/ListaPokemonow";


function App() {
  return (
    <div>
      <Router>
        <Navi />

<ListaPokemonow/>
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
