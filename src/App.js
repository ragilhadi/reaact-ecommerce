import React from "react";
import "./App.css";
import Homepage from "./page/Homepage/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./page/Shop/Shop";
import Navbar from "./components/navbar/Navbar";
import Signin from "./page/Signin/Signin";
import { auth, createUserProfileDocument } from "./firebase/Firebase";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribedFromAuth = null;

  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Navbar currentUser={this.state.currentUser} />
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
}

export default App;
