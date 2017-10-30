import React, { Component } from 'react';
import Header from './Header'
import NavbarHeader from './template/NavbarHeader';
import Map from './template/Map';


import { BrowserRouter as Router,Route, Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div className="HomePage">
            <h1>Hello World</h1>
          
          <Map 
            containerElement={<div style={{ height: `100px` }} />}
            mapElement={<div style={{ height: `100px` }} />} />
        </div>
      </Router>
    );
  }
}

export default HomePage;
