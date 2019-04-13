// LIBRARIES
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
import { Link } from "react-router-dom";
// USER-DEFINED COMPONENTS
import LoginOrSignUp from "../containers/LoginOrSignUp";
import SignOut from "../containers/SignOut";
// IMAGES
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
            className="d-flex align-items-center col-4"
          >
            <div
              className="d-flex justify-content-center align-items-center"
              id="icontainer"
            >
              <img className="mr-2" src={Camera} id="icon" alt="Camera logo" />
            </div>
            Nextagram
          </NavbarBrand>

          <FormGroup className="my-auto mx-auto col-4" id="searchBar">
            <Form>
              <Input
                type="text"
                placeholder="Search"
                className="navBarSearch"
              />
            </Form>
          </FormGroup>

          <NavbarToggler onClick={this.toggle} />
          <Collapse className="col-4" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  Discover
                </NavLink>
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

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu right>
                  {this.props.anon !== null ? (
                    <>
                      <DropdownItem>
                        <Link to="/profile">Profile Page</Link>
                      </DropdownItem>
                      <DropdownItem className="divider" />
                      <DropdownItem>
                        <Link to="/">
                          <SignOut setUser={this.props.setUser} />
                        </Link>
                      </DropdownItem>
                    </>
                  ) : (
                    <>
                      <DropdownItem>
                        <LoginOrSignUp label={"Log In"} isLoginForm={true} />
                      </DropdownItem>

                      <DropdownItem className="divider">
                        <LoginOrSignUp label={"Sign Up"} isLoginForm={false} />
                      </DropdownItem>
                    </>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
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
