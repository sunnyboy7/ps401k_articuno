/* eslint-disable object-curly-newline */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../../containers/App/style.scss';

import CompanyLogo from '../../assets/images/Inner-Logo.jpg';

class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link className="nav-link" to="/Home">
              <img src={CompanyLogo} alt="logo" className="companyLogo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
              <NavDropdown title="Profit Sharing" id="collasible-nav-dropdown">
                <NavLink className="dropdown-item" to="/Valuations">
                  Valuations
                </NavLink>

                <NavLink className="dropdown-item" to="/Employees">
                  Employees
                </NavLink>
                <NavDropdown.Item href="#action/3.3">
                  Withdrawals
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Adjustments
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="401 K" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Valuations">
                  Valuations
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Employees
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Withdrawals
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Adjustments
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
