import React, { Component } from "react";
import { connect } from "react-redux";
import { setSingleProductThunk, clearSingleProduct } from "../store/singleProduct";
import { Button, Typography, Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { addToCartThunk } from "../store/cart";

const useStyles = theme => ({
  image: {
    width: "auto",
    maxHeight: 400,
    margin: theme.spacing(3),
  },
  description: {
    maxHeight: 300,
    margin: "auto",
    margin: theme.spacing(5),
  },
  price: {
    color: "#B12765",
    margin: theme.spacing(3),
  },
  buttonBox: {
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
  },
});

export class ProductDetail extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.setSingleProductThunk(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.clearProductFromProps();
  }

  handleSubmit() {
    const { id: productId } = this.props.product;
    const userId = this.props.user.id;
    const quantity = 1;
    const product = { productId, userId, quantity };
    console.log(product);
    this.props.addToCart(product);
  }
  render() {
    const {
      classes,
      product: { id: productId, name, description, price, stock, imageUrl },
    } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src={imageUrl} alt="product image" className={classes.image} />
        </Grid>
        <Grid container item xs={12} md={6}>
          <Grid item xs={6} md={3}>
            <Typography variant="h4">{name}</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography component="p" className={classes.price}>
              ${price}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.description}>
          <Typography component="p">{description}</Typography>
        </Grid>
        <Grid item xs className={classes.buttonBox}>
          <Button variant="contained" color="primary" onClick={this.handleSubmit}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      /* 
      <div className="product-detail">
        <h1> name: {name}</h1>
        <img src={imageUrl} />
        <p> description: {description}</p>
        <p> price: {price}</p>
        <p> stock: {stock}</p>
      </div>
      */
    );
  }
}

const mapState = state => ({
  product: state.product,
  user: state.auth,
});

const mapDispatch = dispatch => ({
  setSingleProductThunk: id => dispatch(setSingleProductThunk(id)),
  clearProductFromProps: () => dispatch(clearSingleProduct()),
  addToCart: id => dispatch(addToCartThunk(id)),
});

export default connect(mapState, mapDispatch)(withStyles(useStyles)(ProductDetail));
