// LIBRARIES
import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// USER-DEFINED COMPONENTS
import Login from "./Login";
import SignUp from "./SignUp";

class LoginOrSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoginForm: true
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleClick = () => {
    this.setState({
      // When value is false, sign up form will render
      isLoginForm: !this.state.isLoginForm
    });
  };

  componentDidMount() {
    this.setState({
      isLoginForm: this.props.isLoginForm
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.toggle}>{this.props.label}</div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.state.isLoginForm ? "Login" : "Sign Up"}
          </ModalHeader>
          <ModalBody>
            {this.state.isLoginForm ? (
              <Login
                handleClick={this.handleClick}
                setUser={this.props.setUser}
              />
            ) : (
              <SignUp
                handleClick={this.handleClick}
                setUser={this.props.setUser}
              />
            )}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginOrSignUp;
