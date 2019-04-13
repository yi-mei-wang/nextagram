import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPw: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    // Prevent submission if any of the fields are empty
    const { password, confirmPw, username, email } = this.state;
    const stateValues = Object.values(this.state);
    stateValues.forEach(value => {
      if (value === "") {
        e.preventDefault();
      }
      if (password !== confirmPw) {
        e.preventDefault();
      }
    });
    axios
      .post("https://insta.nextacademy.com/api/v1/users/", {
        username,
        email,
        password
      })
      .then(response => {
        console.log(response);
        // if (response.status === 201) {
        //   this.setState({});
        // }
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  render() {
    const { email, password, username, confirmPw } = this.state;
    const isEnabled =
      email.length > 0 &&
      password.length > 0 &&
      username.length > 0 &&
      confirmPw.length > 0;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="formUsername">Username</Label>
          <Input
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            name="username"
            id="username"
            placeholder="Username must be at least six characters long"
          />

          <Label for="formEmail">Email</Label>
          <Input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            id="loginEmail"
            placeholder="example@email.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="formPassword">Password</Label>
          <Input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            id="loginPassword"
            placeholder=""
          />
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            value={this.state.confirmPw}
            onChange={this.handleChange}
            type="password"
            name="confirmPw"
            id="confirmPassword"
            placeholder=""
          />
        </FormGroup>
        Already a member? Log In{" "}
        <span
          className="form-link"
          onClick={() => {
            this.props.handleClick();
          }}
        >
          here!
        </span>
        <hr />
        <div className="row">
          <div className="col-3">
            <Button
              color="primary"
              onClick={this.handleSubmit}
              disabled={!isEnabled}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default SignUp;
