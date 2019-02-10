import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./parts/Header";
import Home from "./parts/Home";
import About from "./parts/About";
import WorkIDo from "./parts/WorkIDo";
import Contact from "./parts/Contact";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/about-me"} component={About} />
          <Route exact path={"/workido"} component={WorkIDo} />
          <Route exact path={"/contact"} component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
