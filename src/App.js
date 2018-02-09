/**
 * TODOs:
 * - pimp README
 * - improve CSS link for react table in index.html
 * - import debugger
 * - implement filters in time entries
 */

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TimeEntries from "./components/TimeEntries";

// make environmental variables available immediately
// require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Productive.io</h1>
        </header>
        <TimeEntries />
      </div>
    );
  }
}

export default App;
