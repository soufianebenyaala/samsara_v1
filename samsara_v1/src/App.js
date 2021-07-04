import React from "react";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import VerifyEmail from "./components/VerifyEmail";
import Home from "./Home/Home";
import Search from "./SearchPage/SearchPage";
import Profile from "./Profile/AbstractProfile";
import Error from "./Profile/Pages/Error";
import { connect } from "react-redux";

function App({ loggedIn, emailVerified }) {
  let routes;
  console.log(loggedIn, emailVerified);
  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/verify-email" component={VerifyEmail} />
        <Route path="/profile" component={Profile} />
        <Route path="/*" exact={true}>
          <div style={{ height: "100vh" }}>
            <Error />
          </div>
        </Route>
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route path="/*" exact={true}>
          <div style={{ height: "100vh" }}>
            <Error />
          </div>
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/search" component={Search} />
      </Switch>
    );
  }

  return (
    <Router>
      <AuthProvider>{routes} </AuthProvider>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
  };
};

export default connect(mapStateToProps)(App);
