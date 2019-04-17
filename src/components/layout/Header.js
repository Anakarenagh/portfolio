import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
export default class Header extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
        return (
          <header>
            <Navbar expand="xl">
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto fixed-top justify-content-end" navbar>
                  <NavItem>
                    <NavLink href="https://www.linkedin.com/in/ana-karen-aguirre-hernandez-8615b998/" target="_blank">LinkedIn</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/Anakarenagh" target="_blank">GitHub</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://dribbble.com/anakarenagh" target="_blank">Dribbble</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="mailto:adserum@gmail.com" target="_blank">Send me an email</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>

          </header>
        )
    }
}
