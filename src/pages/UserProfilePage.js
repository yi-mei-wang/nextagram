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
      <>
        <img src={profileImage} alt="Profile" className="profile-img-big" />
        <UserImages id={match.params.id} />
      </>
    );
  }
}

export default UserProfilePage;
