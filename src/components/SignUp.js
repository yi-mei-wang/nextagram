import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const SignUp = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="formEmail">Email</Label>
        <Input type="email" name="email" id="loginEmail" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="formPassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="loginPassword"
          placeholder=""
        />
        <Label for="formPassword">Confirm Password</Label>
        <Input
          type="password"
          name="password"
          id="confirmPassword"
          placeholder=""
        />
      </FormGroup>
      Already a member? Log In{" "}
      <span
        className="form-link"
        onClick={() => {
          props.handleClick();
        }}
      >
        here!
      </span>{" "}
    </Form>
  );
};

export default SignUp;
