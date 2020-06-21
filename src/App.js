import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Computer from "./components/Computer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Computer />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
