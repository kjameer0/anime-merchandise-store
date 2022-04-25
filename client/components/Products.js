import React, { Component } from "react";
import { connect } from "react-redux";
import { setProductsThunk, clearProducts } from "../store/allProducts";
import { addProductThunk } from "../store/allProducts";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Grid, Container, Typography } from "@material-ui/core";
import { addToCartThunk } from "../store/cart";

export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    const local = JSON.parse(window.localStorage.getItem("cart"));
    if (!local) {
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  render() {
    const { products } = this.props || [];
    return (
      <div className="all-products">
        <Container>
          <Typography variant="h2">Buy our stuff</Typography>
          <Grid container>
            {products.map(product => (
              <Grid key={product.id} item xs={12} md={4}>
                <ProductCard product={product} key={product.id} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(setProductsThunk()),
  clearProducts: () => dispatch(clearProducts()),
  addToCartFromProps: id => {
    dispatch(addToCartThunk(id));
  },
});

// export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
export default connect(mapStateToProps, mapDispatchToProps)(Products);
