import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { setCartThunk } from '../store/cart';
import { clearCart } from '../store/cart';
import { orderCheckoutThunk } from '../store/singleOrder';
import SingleOrderItem from './SingleOrderItem';
import SubTotal from './SubTotal';

const CLIENT_ID =
  'AcA34C5GAOSbQO0YP7JuUdhfyzk0BlTYIt-y2UaTwolNq5NAddiOOcqKCUQHYLM6vW_KIYYJD1QLBBjj';

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0 };
    this.createOrder = this.createOrder.bind(this);
  }
  componentWillUnmount() {
    this.props.clearCart();
  }
  componentDidMount() {
    this.props.fetchCart();
  }
  createOrder(data, actions) {
    const { email, firstName, lastName, address } = this.props;
    return actions.order.create({
      intent: 'CAPTURE',
      payer: {
        name: {
          given_name: firstName,
          surname: lastName,
        },
        address: {
          address_line_1: '1231 Broadway',
          address_line_2: 'APT 2R',
          admin_area_2: 'Brooklyn',
          admin_area_1: 'NY',
          postal_code: '11206',
          country_code: 'US',
        },
        email_address: email,
      },
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '10.00',
          },
        },
      ],
    });
  }
  onApprove(data, actions) {
    return actions.order.capture().then((details) => {
      console.log(details);
      alert(`Transaction completed by ${name}`);
    });
  }
  render() {
    return (
      <div className="checkout">
        <div id="checkout-info">
          <div id="shipping-info">
            <p>123 generic St Brooklyn, NY 11206</p>
            <p>days to deliver (4)</p>
            <p>Expexcted deliver date April 29, 2022</p>
          </div>
          <PayPalScriptProvider options={{ 'client-id': CLIENT_ID }}>
            <PayPalButtons
              style={{ layout: 'vertical' }}
              createOrder={this.createOrder}
              onApprove={this.onApprove}
            />
          </PayPalScriptProvider>
        </div>
        <div id="order-summary">
          <p>Summary of Order</p>
          <div className="all-orders">
            {this.props.cart.map((cart, index) => (
              <SingleOrderItem key={cart.product.id} cart={cart} />
            ))}
          </div>
          <SubTotal items={this.props.cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  email: state.auth.email,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  address: state.auth.address,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(setCartThunk()),
    clearCart: () => dispatch(clearCart()),
    checkout: () => dispatch(orderCheckoutThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
