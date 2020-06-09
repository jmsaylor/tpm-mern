import React, { Component } from "react";
import "./App.css";
import Button from "./components/common/Button";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button />
      </div>
    );
  }
}
export default App;
