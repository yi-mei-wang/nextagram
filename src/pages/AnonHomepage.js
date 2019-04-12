import React from "react";
import { Button } from "reactstrap";
import LoginOrSignUp from "../components/LoginOrSignUp";
import Phone from "../images/screenshot.png";

const AnonHomepage = props => {
  return (
    <div className="main-container row">
      <div className="empty-cont col-3" />
      <div className="phone-div col-lg-3 col-sm-5 col-md-4 mt-5">
        <a href="https://www.freepik.com/free-photos-vectors/technology">
          <img width="90%" src={Phone} alt="Phone" className="mt-3" />
        </a>
      </div>
      <div className="side-form col-lg-4 col-sm-7 col-md-6 mt-5">
        <p id="brand">Nextagram</p>
        <p id="slogan">Sign up to see photos and videos from your friends.</p>
        <div className="text-center">
          <Button className="form-buttons my-5 bg-primary font-weight-bold">
            <LoginOrSignUp
              label={"Log In"}
              isLoginForm={true}
              setUser={props.setUser}
            />
          </Button>
        </div>
        <div>
          <div className="d-inline-block inline-div">
            <hr />
          </div>
          <div className="d-inline-block inline-text">OR</div>
          <div className="d-inline-block inline-div">
            <hr />
          </div>
        </div>
        <div className="text-center">
          <Button className="form-buttons my-5 bg-primary font-weight-bold">
            <LoginOrSignUp
              label={"Sign Up"}
              isLoginForm={false}
              setUser={props.setUser}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnonHomepage;

/* <a href="https://www.freepik.com/free-photos-vectors/technology">Technology vector created by freepik - www.freepik.com</a> */
