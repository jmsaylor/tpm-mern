import React, { Component } from "react";
import "./App.css";
import Button from "./components/common/Button";
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
            <Button />
            <Computer />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
