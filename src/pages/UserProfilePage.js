import React from "react";
// USER-DEFINED COMPONENTS
import UserImages from "../components/UserImages";

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      username: "",
      profileImage: ""
    };
  }

  componentDidMount() {
    const { users, match } = this.props;
    users.forEach(user => {
      if (user.id === parseInt(match.params.id)) {
        this.setState({
          username: user.username,
          profileImage: user.profileImage
        });
      }
    });
  }

  render() {
    const { username, profileImage } = this.state;
    const { match } = this.props;
    return (
      <div className="profile-page-container mx-auto mt-3 p-3">
        <div className="row my-5 mx-5">
          <div className="col-4">
            <img
              src={profileImage}
              alt="profileImage"
              className="w-75 rounded-circle"
            />
          </div>
          <article className="col-8">
            <div>
              <section className="d-flex flex-row align-items-center">
                <h2 className="d-inline my-auto font-weight-light">
                  {username}
                </h2>
                <button className="d-inline ml-3 font-weight-light">
                  Follow
                </button>
              </section>

              <section className="row mt-3 d-flex flex-wrap">
                <div className="col-3">
                  <span className="font-weight-bold">123</span> posts
                </div>
                <div className="col-3">
                  <span className="font-weight-bold">123</span> posts
                </div>
                <div className="col-3">
                  <span className="font-weight-bold">123</span> posts
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
          <UserImages id={match.params.id} />
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
