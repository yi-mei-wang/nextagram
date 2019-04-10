// LIBRARIES
import React from "react";
import Image from "react-graceful-image";
// IMAGES FROM THE WRITER
import NoImages from "../images/nopostsyet.png";
import LikeableImage from "../components/LikeableImage";

const UserImages = props => {
  console.log(props);
  const { images } = props;
  if (images.length !== 0) {
    return images.map((image, index) => {
      return (
        <div
          className="user-img-container d-inline-block position-relative"
          key={index}
        >
          <Image
            className="user-img"
            src={image}
            width="100%"
            height="100%"
            alt="My awesome image"
            style={{ objectFit: "cover" }}
          />
          <LikeableImage />
        </div>
      );
    });
  } else {
    return (
      <div className="d-inline-block">
        <div>
          <img src={NoImages} className="no-img" alt="No posts yet" />
        </div>
      </div>
    );
  }
};

export default UserImages;
