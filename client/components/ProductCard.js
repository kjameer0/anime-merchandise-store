import React from "react";
import { Card, CardContent, CardMedia, Typography, CardHeader, CardActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  media: {
    height: 140,
    width: "auto",
    margin: "8px auto",
  },
  header: {
    borderBottom: "1px solid gray",
    height: 42,
    width: "100%",
    textOverflow: "clip",
    "& *": {
      textOverflow: "clip",
    },
    overflow: "hidden",
    display: "block",
    lineClamp: 1,
  },
  root: {
    width: 350,
    height: 480,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  description: {
    textOverflow: "ellipsis ellipsis",
    whiteSpace: "nowrap",
  },
  content: {
    maxHeight: 200,
    flexGrow: 1,
  },
}));

const ProductCard = props => {
  const { product } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} title={product.name} />
      <Link to={`/products/${product.id}`}>
        <CardMedia component="img" image={product.imageUrl} title="a picture" className={classes.media} />
      </Link>

      <CardContent className={classes.content}>
        <Typography component="p" className={classes.description}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions style={{ alignSelf: "end" }}>
        <Button>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
