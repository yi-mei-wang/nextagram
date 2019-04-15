import React, { Component } from "react";

const SetUserContext = React.createContext();

const SetUserConsumer = SetUserContext.Consumer;

class SetUserProvider extends Component {
  // state = {
  //   currentUser: null,
  //   setUser: () => this.setUser
  // };

  render() {
    // console.log(this.props.state);
    // console.log(this.props.setUser);

    return (
      <SetUserContext.Provider value={this.props}>
        {this.props.children}
      </SetUserContext.Provider>
    );
  }
}

export { SetUserProvider, SetUserConsumer };
