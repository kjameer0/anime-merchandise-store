import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SingleCartItem extends Component {
  render() {
    const cart = this.props.cart || {};
    return (
      <div className="order-item" key={cart.id}>
        <p>X {cart.quantity}</p>
        <Link to={`/products/${cart.product.id}`}>{cart.product.name}</Link>
        <p>${cart.product.price}</p>
      </div>
    );
  }
}
