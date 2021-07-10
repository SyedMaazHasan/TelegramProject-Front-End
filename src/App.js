import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigaion";
import AddEmailForm from "./components/AddEmailForm";
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
          <Route path="/AddEmailForm" component={AddEmailForm} />
          <Route path="/MainPage" component={MainPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
