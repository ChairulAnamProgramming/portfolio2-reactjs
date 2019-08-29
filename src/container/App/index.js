import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// style
import './App.css';
import { Container } from 'reactstrap';

// pages
import Home from '../pages/home';
import About from '../pages/about';
import Navigation from '../../components/navigation';
import Contact from '../pages/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-top pt-3">
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
