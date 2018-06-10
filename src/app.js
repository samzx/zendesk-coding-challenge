import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
