import React, { Component } from "react";
import { connect } from "react-redux";
import { setProductsThunk, clearProducts } from "../store/allProducts";
import { addProductThunk } from "../store/allProducts";
import ProductCard from "./ProductCard";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import { addToCartThunk } from "../store/cart";

export class Products extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
    };
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
  }
  componentDidMount() {
    this.props.fetchProducts();
    const local = JSON.parse(window.localStorage.getItem("cart"));
    if (!local) {
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  handleNextPage() {
    this.props.fetchProducts(this.state.page + 1);
    this.setState({
      page: this.state.page + 1,
    });
  }

  handlePreviousPage() {
    this.props.fetchProducts(this.state.page - 1);
    this.setState({
      page: this.state.page - 1,
    });
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
        {this.state.page > 1 && (
          <Button variant="contained" color="primary" onClick={this.handlePreviousPage}>
            Previous Page
          </Button>
        )}
        {this.props.products.length > 0 && (
          <Button variant="contained" color="primary" onClick={this.handleNextPage}>
            Next Page
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

const mapDispatchToProps = dispatch => ({
  fetchProducts: (pageNumber = 1) => dispatch(setProductsThunk(pageNumber)),
  clearProducts: () => dispatch(clearProducts()),
  addToCartFromProps: id => {
    dispatch(addToCartThunk(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
