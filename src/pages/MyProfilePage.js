import React from "react";
import axios from "axios";
// import Image from "react-graceful-image";
import UserProfilePage from "../pages/UserProfilePage";

class MyProfilePage extends React.Component {
  state = {
    images: []
  };
  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);

    axios({
      method: "get",
      url: "https://insta.nextacademy.com/api/v1/images/me",
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then(response => {
      console.log(response);
      this.setState({
        images: response.data
      });
    });
  }

  render() {
    return (
      <UserProfilePage
        images={this.state.images}
        users={this.props.users}
        match={this.props.match}
      />
    );
  }
}

export default MyProfilePage;
