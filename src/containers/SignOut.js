import React from "react";
import { SetUserConsumer } from "../providers/SetUserProvider";

const SignOut = () => {
  return (
    <SetUserConsumer>
      {context => (
        <div
          onClick={() => {
            localStorage.removeItem("jwt");
            context.setUser();
          }}
        >
          Sign Out
        </div>
      )}
    </SetUserConsumer>
  );
};

export default SignOut;
