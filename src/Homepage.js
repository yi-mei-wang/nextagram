import axios from "axios";
import React from "react";
import Image from "react-graceful-image";
import "./stylesheet/App.scss";
import Loader from "./Loader";
import UserImages from "./UserImages";

class Homepage extends React.Component {
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
      <>
        <div>
          <Loader loading={this.state.isLoading} />
          {this.state.users.map(user => {
            return (
              <div key={user.id} className="img-container d-block mx-auto my-5">
                <div className="d-inline-block">
                  <img src={user.profileImage} className="profile-img" />
                  <span className="d-inline-block font-weight-bold">
                    {user.username}
                  </span>
                </div>
                <UserImages id={user.id} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Homepage;
