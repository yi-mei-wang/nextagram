import React from "react";
import { Modal, ModalBody } from "reactstrap";

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <div onClick={this.toggle}>{this.props.buttonLabel}</div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody className="text-center">
            Change Password
            <hr />
            Nametag
            <hr />
            Authorized Apps
            <hr />
            Notifications
            <hr />
            Privacy and Security
            <hr />
            Log Out
            <hr />
            Cancel
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default UserManagement;

/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
