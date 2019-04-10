// LIBRARIES
import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// STYLESHEET
import "../stylesheets/App.scss";
// USER-DEFINED COMPONENTS
// import Loader from "../components/Loader";
import UserImages from "../containers/UserImages";
import WithCall from "../components/withCall";

const Homepage = props => {
  return (
    <div>
      {/* <Login buttonLabel={"TEST"} /> */}
      {props.users.map(user => {
        const UserImagesWithCall = WithCall(UserImages);
        return (
          <div key={user.id} className="img-container d-block mx-auto my-5">
            <div className="d-inline-block">
              <img
                src={user.profileImage}
                className="profile-img-small"
                alt="Profile"
              />
              <span className="d-inline-block font-weight-bold username">
                <Link to={`users/${user.id}`}>{user.username}</Link>
              </span>
            </div>
            <div>
              <UserImagesWithCall userId={user.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
