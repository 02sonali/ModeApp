import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/userActions';
import {bindActionCreators} from 'redux';

class Header extends React.Component {
  componentDidMount() {

    this.props.getLoginStatus();
  }

  logout() {
    this.props.logout();
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      isLoggedIn ? 
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" className="mr-auto">Mode</Navbar.Brand>
          <Nav>
            <Nav.Link href="/articles">Articles</Nav.Link>
            <Nav.Link href="/new-article">New Article</Nav.Link>
            <Nav.Link href="#" onClick={() => this.logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar> 
        :
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" className="mr-auto">Mode</Navbar.Brand>
          <Nav>
            <Nav.Link href="/articles">Articles</Nav.Link>
            <Nav.Link href="/signin">Sign in</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
          </Nav>
        </Navbar>
      )
  }
}

const mapStateToProps = function(state){
  // here we get the updated state value for user on dispatch action from register
  return {
    isLoggedIn: state.user.userId,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getLoginStatus: actions.checkLoggedInUser,
    logout: actions.logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);