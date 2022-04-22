import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Button,
  CardActions,
} from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { addToCartThunk } from "../store/cart";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
    width: "auto",
    margin: "auto",
  },
  header: {
    borderBottom: "1px solid gray",
  },
  root: {
    width: 350,
    height: 480,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  description: {
    textOverflow: "ellipsis",
    maxHeight: 100,
  },
  content: {
    maxHeight: 200,
  },
}));

const ProductCard = (props) => {
  const { product } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} title={product.name} />
      <Link to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          image={product.imageUrl}
          title="a picture"
          className={classes.media}
        />
      </Link>
      <CardContent className={classes.content}>
        <Typography component="p" className={classes.description}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log(product)
            props.addProductToCart(product)
          }}
        >
          <Button type="submit">Add to Cart</Button>
        </form>
      </CardActions>
    </Card>
  );
};

const MapDispatch = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addToCartThunk(product)),
  };
};
export default connect(null, MapDispatch)(ProductCard);
