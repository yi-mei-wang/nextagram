// LIBRARIES
import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// USER-DEFINED COMPONENTS
import Login from "../components/Login";
import SignUp from "../components/SignUp";

class LoginOrSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoginForm: this.props.isLoginForm
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

  // Should call something else
  // componentDidMount() {
  //   this.setState({
  //     isLoginForm: this.props.isLoginForm
  //   });
  // }

  render() {
    const { modal, isLoginForm } = this.state;
    const { className, setUser, label } = this.props;
    console.log(this.props.isLoginForm);
    console.log(this.state.isLoginForm);
    return (
      <div>
        <div onClick={this.toggle}>{label}</div>
        <Modal isOpen={modal} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>
            {isLoginForm ? "Login" : "Sign Up"}
          </ModalHeader>
          <ModalBody>
            {isLoginForm ? (
              <Login handleClick={this.handleClick} setUser={setUser} />
            ) : (
              <SignUp handleClick={this.handleClick} setUser={setUser} />
            )}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginOrSignUp;
