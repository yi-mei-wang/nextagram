// LIBRARIES
import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";
// STYLESHEETS
import "./stylesheets/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// PAGES
import AnonHomepage from "./pages/AnonHomepage";
import Homepage from "./pages/Homepage";
import UserProfilePage from "./pages/UserProfilePage";
import MyProfilePage from "./pages/MyProfilePage";
// USER-DEFINED COMPONENTS
import Loader from "./components/Loader";
import NavBar from "./components/Navbar";
import WithCall from "./components/withCall";
// import { SetUserProvider } from "./providers/SetUserProvider";

const SetUserContext = React.createContext();

export const SetUserConsumer = SetUserContext.Consumer;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      currentUser: null
    };
  }

  setUser = currentUser => {
    // console.log("hello");
    // const currentUser = localStorage.getItem("jwt");
    // console.log("currentuser", currentUser);
    if (currentUser) {
      console.log("going");
      this.setState({
        currentUser
      });
    }
  };

  removeUser = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    });
  };

  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users/")
      .then(result => {
        // If successful, we do stuffs with 'result'
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
    const currentUser = localStorage.getItem("jwt");

    return (
      <SetUserContext.Provider
        value={{ setUser: this.setUser, removeUser: this.removeUser }}
      >
        <div>
          <NavBar anon={currentUser} />
          <Loader loading={this.state.isLoading} />
          <Route
            exact
            path="/"
            component={
              currentUser === null
                ? props => <AnonHomepage {...props} users={this.state.users} />
                : props => <Homepage {...props} users={this.state.users} />
            }
          />
          {/* Because route has its own props too!! */}
          <Route
            path="/users/:id"
            component={props => (
              <UserProfilePageWithCall
                {...props}
                userId={props.match.params.id}
                users={this.state.users}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            component={
              currentUser === null
                ? props => <AnonHomepage {...props} users={this.state.users} />
                : props => <MyProfilePage {...props} users={this.state.users} />
            }
          />
        </div>
      </SetUserContext.Provider>
    );
  }
}

const UserProfilePageWithCall = WithCall(UserProfilePage);

export default App;
