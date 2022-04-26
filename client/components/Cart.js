import React, { Component } from "react";
import { connect } from "react-redux";
import { setCartThunk } from "../store/cart";
import SelectQuantity from "./SelectQuantity";
import { clearCart } from "../store/cart";
import SingleCartItem from "./SingleCartItem";
import { orderCheckoutThunk } from "../store/singleOrder";
import SubTotal from "./SubTotal";
import { Button } from "@material-ui/core";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      noCart: false,
    };
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentWillUnmount() {
    this.props.clearCart();
  }
  componentDidMount() {
    this.props.fetchCart();
  }

  handleCheckout(event) {
    event.preventDefault();
    this.props.history.push('/checkout');
  }
  render() {
    const userCart = this.props.cart || [];
    if (!userCart.length)
      return (
        <div id="empty-cart">
          <h1>Cart is empty</h1>
        </div>
      );
    return (
      <form id="form-cart" onSubmit={this.handleCheckout}>
        <div className="all-cart">
          {userCart.map((cart, index) => (
            <SingleCartItem key={index} cart={cart} index={index} />
          ))}
        </div>

        <SubTotal id="subtotal" items={this.props.cart} />

        <Button color="primary" variant="contained" type="submit">
          checkout
        </Button>
      </form>
    );
  }
}

const mapState = state => {
  return { cart: state.cart };
};
const mapDispatch = dispatch => {
  return {
    fetchCart: () => dispatch(setCartThunk()),
    clearCart: () => dispatch(clearCart()),
    checkout: () => dispatch(orderCheckoutThunk()),
  };
};

export default connect(mapState, mapDispatch)(Cart);
