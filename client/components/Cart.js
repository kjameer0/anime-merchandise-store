import React, { Component } from "react";
import { connect } from "react-redux";

export class Cart extends Component {
  render() {
    return <div>cart</div>;
  }
}

const mapState = state => {
  return {};
};
const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(Cart);
