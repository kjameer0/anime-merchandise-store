import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCartThunk } from '../store/cart';
import SelectQuantity from './SelectQuantity';
import { clearCart } from '../store/cart';
export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleSingleRemove = this.handleSingleRemove.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cart.length && this.props.cart.length) {
      const newCart = [];
      this.props.cart.map((cart) => {
        newCart.push({
          productId: cart.product.id,
          quantity: cart.quantity,
          price: cart.product.price,
        });
      });
      this.setState({
        cart: [...this.state.cart, ...newCart],
      });
    }
  }
  componentWillUnmount() {
    this.props.clearCart();
  }
  componentDidMount() {
    this.props.fetchCart();
  }
  handleOnChange(event, index) {
    const productId = this.state.cart[index].productId;
    const newCart = this.state.cart.map((cart) => {
      return cart.productId !== productId
        ? cart
        : {
            productId: productId,
            quantity: Number(event.target.value),
            price: cart.price,
          };
    });
    this.setState({ cart: newCart });
  }
  handleSingleRemove(index) {}
  handleCheckout(event) {
    event.preventDefault();
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
      <form id="form-cart" onSubmit={this.handleCheckout}>
        <div className="all-cart">
          {userCart.map((cart, index) => (
            <div className="cart" key={cart.id}>
              <div className="cart-data">
                <img src={cart.product.imageUrl} alt={cart.product.name} />
                <div className="cart-info">
                  <p className="product-name">{cart.product.name}</p>
                  <p className="cart-price">${cart.product.price}</p>
                  <SelectQuantity
                    quantity={cart.quantity}
                    onChange={(event) => this.handleOnChange(event, index)}
                  />
                </div>
              </div>
              <div className="cart-delete">
                <button type="button" onClick={() => handleSingleRemove(index)}>
                  remove from cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <SubTotal items={this.state.cart} />

        <button type="submit">checkout</button>
      </form>
    );
  }
}

const SubTotal = (props) => {
  const totalItem = props.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = props.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
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

const mapState = (state) => {
  return { cart: state.cart };
};
const mapDispatch = (dispatch) => {
  return {
    fetchCart: () => dispatch(setCartThunk()),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapState, mapDispatch)(Cart);
