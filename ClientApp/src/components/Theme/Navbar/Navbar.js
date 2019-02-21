import React, {Component} from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <Navbar color="light" light>
        <Container>
          <NavbarBrand href="/">React Saga</NavbarBrand>

          <Nav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
