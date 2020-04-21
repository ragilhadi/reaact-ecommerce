import React from "react";
import "./App.css";
import Homepage from "./page/Homepage/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route />
        </Switch>
      </BrowserRouter>
      <Homepage />
    </div>
  );
}

export default App;
