import React from "react";
import "./App.css";
import Homepage from "./page/Homepage/Homepage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Shop from "./page/Shop/Shop";
import Navbar from "./components/navbar/Navbar";
import { auth, createUserProfileDocument } from "./firebase/Firebase";
import SigninSignUp from "./page/Signin-Signup/SigninSignUp";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

class App extends React.Component {
  unsubscribedFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
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
            <Navbar />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/shop" exact component={Shop} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SigninSignUp />
                  )
                }
              />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStatetoProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
