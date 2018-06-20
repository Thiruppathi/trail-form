import React, { Component } from "react";
import { connect } from "react-redux"; // React bindings are not included in redux; hence these bindings will be installed explicitly thorugh react-redux

import logo from "./logo.svg";
import "./App.css";

import TrailForm from "./components/TrailForm";
import showResults from "./utils/showResults";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trail-Form</h1>
        </header>
        <section>
          <TrailForm onSubmit={showResults} />
        </section>
      </div>
    );
  }
}

export default connect()(App);
