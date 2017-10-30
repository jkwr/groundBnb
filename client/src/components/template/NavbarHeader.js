import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Icon, NavItem, Navbar} from 'react-materialize'

class NavbarHeader extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={`${1}header`}>
          <Link to="/">Home</Link>
        </li>,
        <li key={`${2}header`}>
          <Link to="dashboard">Dashboard</Link>
        </li>,
        <li key={`${3}header`}>
          <Link to="logout">Logout</Link>
        </li>,
      ];
    } else {
      return [
        // Unauthenticated navigation
        <li key={1}>
          <Link to="/">Home</Link>
        </li>,
        <li key={2}>
          <Link to="login">Login</Link>
        </li>,
        <li key={3}>
          <Link to="register">Register</Link>
        </li>,
      ];
    }
  }

	
render() {
return (
<Navbar brand='logo' left>
	{this.renderLinks()}
	<NavItem href='/houses'>Houses</NavItem>

</Navbar>
		)
	}
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default NavbarHeader;
