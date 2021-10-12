import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navi from "./page/Navi";
import Ulubione from "./page/Ulubione";
import Arena from "./page/Arena";

import PokeList from "./page/PokeList";

function App() {
  console.log();
  return (
    <div>
      <Router>
        <Navi />
        <Route path="/" exact>
          <PokeList />
        </Route>
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
