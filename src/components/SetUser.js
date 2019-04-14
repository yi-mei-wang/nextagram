import React, { Component } from "react";

const MyContext = React.createContext();

class ContextProvider extends Component {
  render() {
    return (
      <MyContext.Provider value={this.setUser}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ContextProvider;
