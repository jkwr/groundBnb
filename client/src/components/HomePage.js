import React, { Component } from 'react';
import Header from './Header'
import NavbarHeader from './template/NavbarHeader';
import Map from './template/Map';
import {Carousel} from 'react-materialize'
import "./HomePage.css";

import { BrowserRouter as Router,Route, Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div className="HomePage">
            
            <Carousel
						fixedItem={<button className='btn white'>LEARN MORE</button>}
						options={{ fullWidth: true }}
						images={'https://image.ibb.co/fTMofw/welcome.jpg'}
						/>
        </div>
      </Router>
    );
  }
}

export default HomePage;
