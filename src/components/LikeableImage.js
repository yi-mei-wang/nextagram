import React, { Component } from "react";
import Like from "../images/heart.png";

class LikeableImage extends Component {
  state = {
    isDoubleClicked: false
  };

  handleDoubleClick = () => {
    this.setState(
      {
        isDoubleClicked: true
      },
      () => {
        // setTimeout(()=>{},1000)
        setTimeout(() => {
          this.setState({
            isDoubleClicked: false
          });
        }, 1000);
      }
    );
  };

  render() {
    const { isDoubleClicked } = this.state;
    return (
      <div className="user-img" onDoubleClick={this.handleDoubleClick}>
        <img
          src={Like}
          className="heart"
          alt="Like icon"
          style={{ display: isDoubleClicked ? "block" : "none" }}
        />
      </div>
    );
  }
}

export default LikeableImage;
