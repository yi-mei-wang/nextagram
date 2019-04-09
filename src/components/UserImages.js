import axios from "axios";
// import Image from "react-graceful-image";
import React from "react";

// import NoImages from "../images/nopostsyet.png";
import Like from "../images/like.png";

class UserImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/images/?userId=${this.props.id}`
      )
      .then(images => {
        this.setState({
          images: images.data
        });
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }

  render() {
    // if (this.state.images.length !== 0) {
    return (
      <div className="text-center">
        {this.state.images.map(image => {
          return (
            <div className="d-inline-block mx-auto">
              <div
                className="user-img"
                style={{
                  backgroundImage: `url(${image})`
                }}
              >
                <div className="heart">
                  <img src={Like} className="like" alt="Like icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
    // } else {
    //   return null;
    // <div className="d-inline-block">
    //   <div className="user-img">
    //     <img src={NoImages} className="no-img" />
    //   </div>
    // </div>
  }
}

export default UserImages;
