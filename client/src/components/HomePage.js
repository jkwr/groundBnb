import React, { Component } from 'react';

import {Carousel} from 'react-materialize'
import "./HomePage.css";

import { BrowserRouter as Router,Route, Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div className="HomePage">
            
            <Carousel
						fixedItem={<button className='btn white'>HOW IT WORKS</button>}
						options={{ fullWidth: true }}
						images={'https://image.ibb.co/jikyVw/welcome_Page.jpg'}
						/>
        </div>
      </Router>
    );
  }
}

export default HomePage;
