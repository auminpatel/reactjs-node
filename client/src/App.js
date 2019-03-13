import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Add from "./components/add";
//import Display from "./components/display";
import Index from "./components/index";
import Edit from "./components/edit";
//import { Display } from "./components/display";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">
              Contact List
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Index
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/edit/:id"} className="nav-link">
                    Edit
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/add" component={Add} />
            <Route exact path="/index" component={Index} />
            <Route exact path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
