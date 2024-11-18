import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import PokemonFetcher from "./PokemonFetcher";

// create a class App
// React.Component or Component you need to add this every time you create a class
// render method used to return the HTML element
class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonFetcher />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
