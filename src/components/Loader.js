import React from "react";
import "../stylesheet/App.scss";
import LoaderGif from "../images/loader.gif";

const Loader = props => {
  if (props.loading) {
    return (
      <div id="loader-div">
        <img src={LoaderGif} id="loader-gif" alt="Loader gif" />
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;
