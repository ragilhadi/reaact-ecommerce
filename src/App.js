import React from "react";
import "./App.css";
import Homepage from "./page/Homepage/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./page/Shop/Shop";
import Navbar from "./components/navbar/Navbar";
import Signin from "./page/Signin/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/signin" exact component={Signin} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
