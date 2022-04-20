import React, { Component } from "react";
import { connect } from "react-redux";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = event => {};
  componentDidMount() {
    // this.props.fetchCart();

    this.setState({
      cart: [
        {
          id: 1,
          quantity: 3,
          product: {
            name: "Weber Traveler Portable Propane Gas Grill - Black - 9010001",
            description:
              "Ready, set, grill on the go! The Weber Traveler portable gas BBQ grill offers 320 square inches of cooking space to create the grilled foods you love anytime, anywhere. Weber Traveler gas grills are perfect for tailgating, camping or small spaces like apartment balconies. With the push of a button, the grill ignites quickly and easily. The durab",
            price: 3000.0,
            stock: 20,
            imageUrl:
              "https://cdn.shocho.co/sc-image/3/0/5/e/305e08558e4130ae1c2609cf93d2b1df.jpg?i10c=img.resize(width:500,height:500)",
          },
        },
        {
          id: 2,
          quantity: 3,
          product: {
            name: "mystery box",
            description: "What is it?",
            price: 20000.0,
            stock: 20,
            imageUrl: "https://powelllacrosse.com/wp-content/uploads/2020/04/mysterybox.jpg",
          },
        },
      ],
    });
  }
  render() {
    const { cart: userCart } = this.state;

    return (
      <div>
        <div className="all-cart">
          {userCart.map(cart => (
            <div className="cart" key={cart.id}>
              <div className="cart-data">
                <img src={cart.product.imageUrl} alt={cart.product.name} />
                <div className="cart-info">
                  <p className="product-name">{cart.product.name}</p>
                  <p className="cart-price">${cart.product.price}</p>
                  <CartOptions quantity={cart.quantity} onChange={this.handleOnChange} />
                </div>
              </div>
              <div className="cart-delete">
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

const SubTotal = props => {
  const totalItem = props.userCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = props.userCart.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
  return (
    <div id="subtotal">
      <h3>
        Subtotal ({totalItem} item): ${totalCost}
      </h3>
    </div>
  );
};

const CartOptions = props => {
  const quantity = Array.from({ length: props.quantity }, (_, i) => i + 1);
  return (
    <label>
      quantity:
      <select defaultValue={props.quantity} onChange={props.onChange}>
        {quantity.map(number => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
    </label>
  );
};

// const mapState = (state) => {
//   return { cart: state.cart };
// };
// const mapDispatch = (dispatch) => {
//   return { fetchCart: () => dispatch(fetchCart()) };
// };

// export default connect(mapState, mapDispatch)(Cart);
