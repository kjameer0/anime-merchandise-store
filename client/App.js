import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { setCartThunk } from "./store/cart";

class App extends Component {
  componentDidMount() {
    this.props.fetchCart();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Routes />
        </Container>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: () => dispatch(setCartThunk()),
  };
};

export default connect(null, mapDispatch)(App);
