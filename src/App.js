import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Dev from "./components/Dev"
import Theatre from "./components/Theatre"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
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
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/dev" component={Dev}></Route>
            <Route exact path="/theatre" component={Theatre}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
          <Footer id="footer" />
      </Router>
      
    </div>
  );
}

export default App;
