import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Computer from "./components/Computer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <div className='HomePage'>
            <Computer />
            <NavBar />
          </div>
        </Route>
        <Route path='projects' exact></Route>
        <Route path='members' exact></Route>
        <Route path='statistics' exact></Route>
        <Route path='info' exact></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
