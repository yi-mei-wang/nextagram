import React from "react";
import { Link } from "react-router-dom";
// import Image from "react-graceful-image";
// STYLESHEETS
import "../stylesheet/App.scss";
// PAGES
// import UserProfilePage from "./UserProfilePage";

// USER-DEFINED COMPONENTS
import UserImages from "../components/UserImages";

const Homepage = ({ users }) => {
  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id} className="img-container d-block mx-auto my-5">
            <div className="d-inline-block">
              <img
                src={user.profileImage}
                className="profile-img-small"
                alt="User profile"
              />
              <span className="d-inline-block font-weight-bold username">
                <Link to={`/users/${user.id}`}>{user.username}</Link>
              </span>
            </div>
            <UserImages id={user.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
