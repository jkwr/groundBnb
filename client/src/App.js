import React, { Component } from 'react';
import Header from './components/Header'
import NavbarHeader from './components/template/NavbarHeader';
import Map from './components/template/Map';
import HousesContainer from './containers/HousesContainer'
import HomePage from './components/HomePage'


// Import authentication related pages
// import Register from './components/auth/register';
// import Login from './components/auth/login';
// import Logout from './components/auth/logout';
// import ForgotPassword from './components/auth/forgot_password';
// import ResetPassword from './components/auth/reset_password';
// import RequireAuth from './components/auth/require_auth';


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
