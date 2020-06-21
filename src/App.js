import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Computer from "./components/Computer";
import Info from "./components/Info";

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
        <Route path='/projects' exact></Route>
        <Route path='/members' exact></Route>
        <Route path='/statistics' exact></Route>
        <Route path='/info' exact>
          <Info />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
