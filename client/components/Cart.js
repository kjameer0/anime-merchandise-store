import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCartThunk } from '../store/cart';
export class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (event) => {};
  componentDidMount() {
    this.props.fetchCart();
  }
  render() {
    const userCart = this.props.cart;
    if (!userCart.length)
      return (
        <div id="empty-cart">
          <h1>Cart is empty</h1>
        </div>
      );
    return (
      <div>
        <div className="all-cart">
          {userCart.map((cart) => (
            <div className="container cart" key={cart.id}>
              <img src={cart.product.imageUrl} alt={cart.product.name} />
              <p>{cart.product.name}</p>
              <CartOptions
                quantity={cart.quantity}
                onChange={this.handleOnChange}
              />
              <div>
                <button type="button">remove from cart</button>
              </div>
            </div>
          ))}
        </div>

        <SubTotal userCart={userCart} />
      </div>
    );
  }
}

const SubTotal = (props) => {
  const totalItem = props.userCart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalCost = props.userCart.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );
  return (
    <div id="subtotal">
      <h3>
        Subtotal ({totalItem} item): ${totalCost}
      </h3>
    </div>
  );
};

const CartOptions = (props) => {
  const quantity = Array.from({ length: props.quantity }, (_, i) => i + 1);
  return (
    <label>
      quantity:
      <select defaultValue={props.quantity} onChange={props.onChange}>
        {quantity.map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
    </label>
  );
};

const mapState = (state) => {
  return { cart: state.cart };
};
const mapDispatch = (dispatch) => {
  return { fetchCart: () => dispatch(setCartThunk()) };
};

export default connect(mapState, mapDispatch)(Cart);
