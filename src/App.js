import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Dev from "./components/Dev"
import Theatre from "./components/Theatre"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/dev" component={Dev}></Route>
            <Route exact path="/theatre" component={Theatre}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
