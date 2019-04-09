import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import Camera from "../images/camera.png";

class NavBar extends React.Component {
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
      <div className="navBarDiv">
        <Navbar
          color="white"
          light
          expand="md"
          className="d-flex justify-content-space flex-row"
        >
          <NavbarBrand
            id="navBarMiddle"
            href="/"
            style={navBar}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              className="d-flex justify-content-center align-items-center"
              id="icontainer"
            >
              <img className="mr-2" src={Camera} id="icon" />
            </div>
            Nextagram
          </NavbarBrand>
          <FormGroup className="my-auto" id="searchBar">
            <Form>
              <Input
                type="text"
                placeholder="Search"
                className="navBarSearch"
              />
            </Form>
          </FormGroup>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/discover/">Discover</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Notifications
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Follow Requests</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Likes</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const navBar = {
  fontFamily: "Billabong",
  fontSize: "2rem"
};

export default NavBar;

/* <div>
Icons made by{" "}
<a href="https://www.flaticon.com/authors/coucou" title="Coucou">
  Coucou
</a>{" "}
from{" "}
<a href="https://www.flaticon.com/" title="Flaticon">
  www.flaticon.com
</a>{" "}
is licensed by{" "}
<a
  href="http://creativecommons.org/licenses/by/3.0/"
  title="Creative Commons BY 3.0"
  target="_blank"
>
  CC 3.0 BY
</a>
</div> */
// }

// <div>
//   Icons made by{" "}
//   <a href="https://www.freepik.com/" title="Freepik">
//     Freepik
//   </a>{" "}
//   from{" "}
//   <a href="https://www.flaticon.com/" title="Flaticon">
//     www.flaticon.com
//   </a>{" "}
//   is licensed by{" "}
//   <a
//     href="http://creativecommons.org/licenses/by/3.0/"
//     title="Creative Commons BY 3.0"
//     target="_blank"
//   >
//     CC 3.0 BY
//   </a>
// </div>;
