import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from '../Home';
import Valuations from '../Valuations/editValuation';
import CompanyLogo from '../../assets/images/Inner-Logo.jpg';

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand href="/">
              {' '}
              <img src={CompanyLogo} alt="logo" className="companyLogo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown
                  title="Profit Sharing"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item to="/Valuations">
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

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Valuations" component={Valuations} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
