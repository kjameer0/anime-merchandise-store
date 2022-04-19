import React, { Component } from "react";
import { connect } from "react-redux";

export class ProductDetail extends Component {
  render() {
    return <div>detail</div>;
  }
}

const mapState = state => {
  return {};
};
const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(ProductDetail);
