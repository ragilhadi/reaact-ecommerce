import React from "react";
import "./App.css";
import Homepage from "./page/Homepage/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./page/Shop/Shop";
import Navbar from "./components/navbar/Navbar";
import { auth, createUserProfileDocument } from "./firebase/Firebase";
import SigninSignUp from "./page/Signin-Signup/SigninSignUp";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribedFromAuth = null;

  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
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
              <Route path="/signin" exact component={SigninSignUp} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
