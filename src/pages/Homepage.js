// LIBRARIES
import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// STYLESHEET
import "../stylesheets/App.scss";
// USER-DEFINED COMPONENTS
// import Loader from "../components/Loader";
import UserCarousel from "../components/Carousel";
import WithCall from "../components/withCall";

const Homepage = props => {
  return (
    <div>
      {props.users.map(user => {
        const CarouselWithCall = WithCall(UserCarousel);
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
              <CarouselWithCall userId={user.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
