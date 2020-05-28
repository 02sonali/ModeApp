import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Header = () => {
   return <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Mode</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/signin">Sign in</Nav.Link>
        <Nav.Link href="/signup">Sign up</Nav.Link>
        <Nav.Link href="/articles">Articles</Nav.Link>
        <Nav.Link href="/new-article">New Article</Nav.Link>
      </Nav>
    </Navbar>
}

export default Header;