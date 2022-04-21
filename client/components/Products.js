import React, { Component } from "react";
import { connect } from "react-redux";
import { setProductsThunk, clearProducts } from "../store/allProducts";
import { addProductThunk } from "../store/allProducts";
import { Link } from "react-router-dom";
import { addToCartThunk } from "../store/cart";

export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  handleClick(evt) {
    //thunk
  }
  render() {
    const { products } = this.props || [];
    return (
      <div className="all-products">
        {products.map((product) => (
          <div key={product.id} className="container products">
          <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            </Link>
            <button type="button" className="blue buybtn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(setProductsThunk()),
  clearProducts: () => dispatch(clearProducts()),
  addToCartFromProps: (id) => {dispatch(addToCartThunk(id))}
});

// export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
export default connect(mapStateToProps, mapDispatchToProps)(Products);
