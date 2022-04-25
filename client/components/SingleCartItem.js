import React, { Component } from "react";
import { connect } from "react-redux";
import { setCartThunk } from "../store/cart";
import SelectQuantity from "./SelectQuantity";
import { clearCart, deleteFromCartThunk, updateCartThunk } from "../store/cart";

class SingleCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      quantity: 0,
      productId: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    let cartItem = this.props.cart;
    this.setState({
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      productId: cartItem.product.id,
    });
  }

  handleChange(event) {
    let newVal = event.target.value;
    this.props.updateCartFromProps({
      quantity: Number(newVal),
      id: this.props.cart.id,
    });
  }

  render() {
    const cart = this.props.cart || {};
    return (
      <div className="cart" key={cart.id}>
        <div className="cart-data">
          <img src={cart.product.imageUrl} alt={cart.product.name} />
          <div className="cart-info">
            <p className="product-name">{cart.product.name}</p>
            <p className="cart-price">${cart.product.price}</p>
            <SelectQuantity
              quantity={cart.quantity}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
        </div>
        <div className="cart-delete">
          <button
            type="button"
            onClick={() => this.props.deleteFromCartProps(cart)}
          >
            remove from cart
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    deleteFromCartProps: (id) => dispatch(deleteFromCartThunk(id)),
    updateCartFromProps: (info) => dispatch(updateCartThunk(info)),
  };
};

export default connect(null, mapDispatch)(SingleCartItem);
