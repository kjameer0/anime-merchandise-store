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
      <div className="product-detail">
        <h1> name: {name}</h1>
        <img src={imageUrl} />
        <p> description: {description}</p>
        <p> price: {price}</p>
        <p> stock: {stock}</p>
      </div>
    );
  }
}

const mapState = state => ({
  product: state.product,
});

const mapDispatch = dispatch => ({
  setSingleProductThunk: id => dispatch(setSingleProductThunk(id)),
});

export default connect(mapState, mapDispatch)(ProductDetail);
