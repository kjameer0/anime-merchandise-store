import React, { Component } from "react";
import { connect } from "react-redux";
import { setSingleProductThunk } from "../store/singleProduct";

export class ProductDetail extends Component {
  componentDidMount() {
    this.props.setSingleProductThunk(this.props.match.params.id);
  }

  render() {
    const {
      product: { name, description, price, stock, imageUrl },
    } = this.props;
    return (
      <div>
        <h1> name: {name}</h1>
        <img src={imageUrl} />
        <h2> description: {description}</h2>
        <h2> price: {price}</h2>
        <h2> stock: {stock}</h2>
      </div>
    );
  }
}

const mapState = (state) => ({
  product: state.product,
});

const mapDispatch = (dispatch) => ({
  setSingleProductThunk: (id) => dispatch(setSingleProductThunk(id)),
});

export default connect(mapState, mapDispatch)(ProductDetail);
