import React from "react";

const SignOut = props => {
  return (
    <div
      onClick={() => {
        localStorage.removeItem("jwt");
        props.setUser();
      }}
    >
      Sign Out
    </div>
  );
};

export default SignOut;
