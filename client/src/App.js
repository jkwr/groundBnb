import React, { Component } from 'react';
import Header from './components/Header'
import NavbarHeader from './components/template/NavbarHeader';
import Map from './components/template/Map';
import HousesContainer from './containers/HousesContainer'
import HomePage from './components/HomePage'



import { BrowserRouter as Router,Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarHeader />
         
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/houses" component={ HousesContainer } />

        </div>
      </Router>
    );
  }
}

export default App;
