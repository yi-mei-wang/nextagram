import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoginForm: true
//     };
//   }

//   toggleForm = () => {
//     this.setState({
//       // When value is false, sign up form will render
//       isLoginForm: false
//     });
//   };
// if this.state.isLoginForm, display <Login></Login>
// else, display <SignUp></SignUp>
// isLoginForm should change when "click here" is clicked
// onClick = {this.toggleForm}
// }

const Login = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="loginEmail" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="loginPassword"
          placeholder=""
        />
      </FormGroup>
      New Member? Sign up{" "}
      <span
        className="form-link"
        onClick={() => {
          props.handleClick();
        }}
      >
        here!
      </span>
    </Form>
  );
};

export default Login;
