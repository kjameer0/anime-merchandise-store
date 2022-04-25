import React, { Component } from "react";
import { connect } from "react-redux";
import { setCartThunk } from "../store/cart";
import SelectQuantity from "./SelectQuantity";
import { clearCart } from "../store/cart";
import SingleCartItem from "./SingleCartItem";
import { orderCheckoutThunk } from "../store/singleOrder";
export class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.cart.length && this.props.cart.length) {
  //     const newCart = [];
  //     this.props.cart.map((cart) => {
  //       newCart.push({
  //         productId: cart.product.id,
  //         quantity: cart.quantity,
  //         price: cart.product.price,
  //       });
  //     });
  //     this.setState({
  //       cart: [...this.state.cart, ...newCart],
  //     });
  //   }
  // }
  // componentDidUpdate(prev) {

  // }
  componentWillUnmount() {
    this.props.clearCart();
  }
  componentDidMount() {
    this.props.fetchCart();
  }

  handleCheckout(event) {
    event.preventDefault();
    this.props.clearCart();
    this.props.checkout();
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

        <SubTotal items={this.props.cart} />

        <button type="submit">checkout</button>
      </form>
    );
  }
}

const SubTotal = props => {
  const totalItem = props.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = props.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
  return (
    <div id="subtotal">
      <h3>
        Subtotal ({totalItem} item{totalItem !== 1 && "s"}): ${totalCost}
      </h3>
    </div>
  );
};

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
