import React from "react";
import axios from "axios";
import Image from "react-graceful-image";

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
    return this.state.images.map(image => {
      return <Image src={image} alt="My pictures" />;
    });
  }
}

export default MyProfilePage;
