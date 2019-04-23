import React from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from "reactstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPw: "",
      errorMsg: [],
      pwError: ""
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
        this.setState({
          pwError: "Passwords do not match"
        });
      }
    });
    axios
      .post("https://insta.nextacademy.com/api/v1/users/", {
        username,
        email,
        password
      })
      .then(response => {
<<<<<<< HEAD
        if (response.status === 201) {
          localStorage.setItem("jwt", response.data.auth_token);
          localStorage.setItem("id", response.data.user.id);
          this.props.setUser(response.data);
        }
      })
      .catch(error => {
        this.setState({
          errorMsg: error.response.data.message
        });
=======
        console.log(response);
        // if (response.status === 201) {
        //   this.setState({});
        // }
      })
      .catch(error => {
        console.log("Error", error);
>>>>>>> 578c0ebecbb5ecf987be855522fd17c3c249dfb3
      });
  };

  render() {
    const {
      email,
      password,
      username,
      confirmPw,
      errorMsg,
      pwError
    } = this.state;

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
            invalid={Boolean(
              errorMsg.filter(msg => msg.includes("Username")).length
            )}
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            name="username"
            id="username"
            placeholder="Username must be at least six characters long"
          />
          <FormFeedback>
            {errorMsg.filter(msg => msg.includes("Username"))}
          </FormFeedback>

          <Label for="formEmail">Email</Label>
          <Input
            invalid={!!errorMsg.filter(msg => msg.includes("Email")).length}
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            id="loginEmail"
            placeholder="example@email.com"
          />
          <FormFeedback>
            {errorMsg.filter(msg => msg.includes("Email"))}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="formPassword">Password</Label>
          <Input
            invalid={Boolean(
              errorMsg.filter(msg => msg.includes("Password")).length
            )}
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            id="loginPassword"
            placeholder=""
          />
          <FormFeedback>
            {errorMsg.filter(msg => msg.includes("Password"))}
          </FormFeedback>

          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            invalid={Boolean(pwError.length)}
            value={this.state.confirmPw}
            onChange={this.handleChange}
            type="password"
            name="confirmPw"
            id="confirmPassword"
            placeholder=""
          />
          <FormFeedback>{pwError}</FormFeedback>
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
