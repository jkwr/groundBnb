import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { NavItem, Navbar} from 'react-materialize'
import "./NavbarHeader.css";

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
  <div> 
<Navbar fixed={true} brand={<img className="hlogo"
 src="https://image.ibb.co/eMwvsb/gBnbLogo.png"/>} right>

	{this.renderLinks()}
	<NavItem href='/'>Trips</NavItem>
  <NavItem href='/'>Become a Host</NavItem>
  <NavItem href='/'>Messages</NavItem>
  <NavItem href='/'>Help</NavItem>

</Navbar>
<Navbar fixed={true} >


 <li key={1}> <Link to="/">For You</Link></li>
   <NavItem href='/houses'>Homes</NavItem>
 <li key={3}> <Link to="/">Experiences</Link></li>
 <li key={4}> <Link to="/">Resturants</Link></li>

  </Navbar>

</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default NavbarHeader;
