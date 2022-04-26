import React, { Component } from "react";
import { connect } from "react-redux";

export class Profile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>Logged in as {user.username}</h2>
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.auth,
  };
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(Profile);
