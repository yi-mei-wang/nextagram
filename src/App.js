import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";
// STYLESHEETS
import "./stylesheet/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// PAGES
import Homepage from "./pages/Homepage";
import UserProfilePage from "./pages/UserProfilePage";
// USER-DEFINED COMPONENTS
import Loader from "./components/Loader";
import NavBar from "./components/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users/")
      .then(result => {
        // If successful, we do stuffs with 'result'
        // console.log(result.data);
        this.setState({
          users: result.data,
          isLoading: false
        });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Loader loading={this.state.isLoading} />
          <Route
            exact
            path="/"
            component={props => (
              <Homepage {...props} users={this.state.users} />
            )}
          />
          {/* Because route has its own props too!! */}
          <Route
            path="/users/:id"
            component={props => (
              <UserProfilePage {...props} users={this.state.users} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
