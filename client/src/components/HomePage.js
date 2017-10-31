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
            center= {{lat:37.7576793, lng: -122.5076404}}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `500px` }} />} />
        </div>
      </Router>
    );
  }
}

export default HomePage;
