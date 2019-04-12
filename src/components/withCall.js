import React from "react";
import axios from "axios";

// Higher-order component that takes in a wrapped component (whatever that means), which then returns a function that takes in userId as an argument to make an API call. This HOC will then return a new component that has the data from the API call, which in this case are the user's images

const WithCall = WrappedComponent =>
  class extends React.Component {
    state = {
      images: []
    };

    componentDidMount() {
      axios
        .get(
          `https://insta.nextacademy.com/api/v1/images/?userId=${
            this.props.userId
          }`
        )
        .then(result => {
          this.setState({ images: result.data });
        })
        .catch(error => {
          console.log(`ERROR: ${error}`);
        });
    }

    render() {
      return <WrappedComponent images={this.state.images} {...this.props} />;
    }
  };

export default WithCall;
