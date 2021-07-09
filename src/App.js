import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigaion";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/Register";
import Logout from "./components/Logout";
import MainPage from "./components/MainPage";
const token = localStorage.getItem("token");

class App extends Component {
  state = {};
  componentDidMount() {
    console.log("jwt token = ", token);
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />

        <Switch>
          {!token && <Route path="/RegisterForm" component={RegisterForm} />}

          <Route path="/LoginForm" component={LoginForm} />
          <Route path="/Logout" component={Logout} />
          <Route path="/MainPage" component={MainPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
