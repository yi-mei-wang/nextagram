import React from "react";
// USER-DEFINED COMPONENTS
import UserManagement from "../components/UserManagement";
import UserImages from "../containers/UserImages";
// USER IMAGES
import Settings from "../images/settings.png";

class UserProfilePage extends React.Component {
  render() {
    const { images } = this.props;

    const userInfo = this.props.users.find(
      user =>
        user.id === parseInt(this.props.match.params.id) ||
        user.id === parseInt(localStorage.getItem("id"))
    );

    return (
      <div className="profile-page-container mx-auto mt-3 p-3 d-flex">
        <div className="row my-5 mx-5">
          <div className="col-4">
            <img
              src={userInfo && userInfo.profileImage}
              alt="profileImage"
              className="w-75 rounded-circle"
            />
          </div>
          <article className="col-8">
            <div>
              <section className="d-flex flex-row align-items-center">
                <h2 className="d-inline my-auto font-weight-light">
                  {userInfo && userInfo.username}
                </h2>
                <button className="d-inline ml-3 font-weight-light">
                  Follow
                </button>
                <UserManagement
                  buttonLabel={
                    <img
                      className="ml-3"
                      id="settings-gear"
                      src={Settings}
                      alt="Settings Icon"
                    />
                  }
                />
              </section>

              <section className="row mt-3 d-flex flex-wrap">
                <div className="col-3">
                  <span className="font-weight-bold">{images.length}</span>{" "}
                  posts
                </div>
                <div className="col-3">
                  <span className="font-weight-bold">
                    {Math.floor(Math.random() * 1000)}
                  </span>{" "}
                  followers
                </div>
                <div className="col-3">
                  <span className="font-weight-bold">
                    {Math.floor(Math.random() * 1000)}
                  </span>{" "}
                  following
                </div>
              </section>

              <section className="row username mt-3">
                <div className="text-capitalize font-weight-bold">
                  Firstname Lastname
                </div>
              </section>
            </div>
          </article>
        </div>
        <div className="user-imgs pt-5">
          <UserImages images={images} />
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
