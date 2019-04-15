import React from "react";
import { SetUserConsumer } from "../App";

const SignOut = () => {
  return (
    <SetUserConsumer>
      {context => {
        console.log(context);
        return (
          <div
            onClick={() => {
              context.removeUser();
            }}
          >
            Sign Out
          </div>
        );
      }}
    </SetUserConsumer>
  );
};

export default SignOut;
