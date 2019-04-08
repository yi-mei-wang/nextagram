import React from "react";
import Homepage from "./Homepage";
import NavBar from "./Navbar";
import "./stylesheet/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <Homepage />
      </div>
    );
  }
}

export default App;
