import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SingleCartItem extends Component {
  render() {
    const order = this.props.order || {};
    return (
      <div className="order-item" key={order.id}>
        <p>X {order.quantity}</p>
        <Link to={`/products/${order.product.id}`}>{order.product.name}</Link>
        <p>${order.product.price}</p>
      </div>
    );
  }
}
