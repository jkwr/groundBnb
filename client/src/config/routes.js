import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import HousesContainer from '../containers/HousesContainer'
import Houses from "../components/Houses";

// Import authentication related pages
// import Register from '../components/auth/register';
// import Login from '../components/auth/login';
// import Logout from '../components/auth/logout';
// import ForgotPassword from '../components/auth/forgot_password';
// import ResetPassword from '../components/auth/reset_password';

export default (
  <Route path='/' component={App}>
    <Route path='houses' component={Houses}/>
  </Route>
);

// const routes = ()
	


// export default routes