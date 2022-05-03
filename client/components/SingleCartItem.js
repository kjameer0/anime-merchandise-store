import React, { Component } from "react";
import { connect } from "react-redux";
import SelectQuantity from "./SelectQuantity";
import { clearCart, deleteFromCartThunk, updateCartThunk } from "../store/cart";
import { Typography, Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";

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
    console.log(this.state);
  }
  componentDidUpdate(prev) {
    if (prev.cart.quantity !== this.props.cart.quantity) {
      this.setState({ quantity: this.props.cart.quantity });
    }
  }

  handleChange(event) {
    let newVal = event.target.value;
    this.props.updateCartFromProps({
      quantity: Number(newVal),
      id: this.props.cart.id,
      product: this.props.cart.product,
    });
  }

  render() {
    const cart = this.props.cart || {};

    return (
      <Card className="cart" key={cart.id}>
        <div className="cart-data">
          <Link to={`/products/${cart.product.id}`}>
            <img src={cart.product.imageUrl} alt={cart.product.name} />
          </Link>
          <div className="cart-info">
            <Typography component="p" className="product-name">
              {cart.product.name}
            </Typography>
            <Typography component="p" className="cart-price">
              ${cart.product.price}
            </Typography>
            <SelectQuantity quantity={cart.quantity} onChange={event => this.handleChange(event)} />
          </div>
        </div>
        <div className="cart-delete">
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={() => this.props.deleteFromCartProps(cart)}
          >
            remove from cart
          </Button>
        </div>
      </Card>
    );
  }
}

const mapState = state => {
  return {
    cartFromStore: state.cart,
  };
};

const mapDispatch = dispatch => {
  return {
    deleteFromCartProps: id => dispatch(deleteFromCartThunk(id)),
    updateCartFromProps: info => dispatch(updateCartThunk(info)),
  };
};

export default connect(mapState, mapDispatch)(SingleCartItem);
