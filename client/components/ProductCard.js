import React from "react";
import { Card, CardContent, CardMedia, Typography, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  media: {
    height: 140,
    width: "auto",
    margin: "auto",
  },
  header: {
    borderBottom: "1px solid gray",
    height: 30,
    textOverflow: "clip",
    "& *": {
      textOverflow: "ellipsis ellipsis",
    },
  },
  root: {
    width: 350,
    height: 480,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  description: {
    textOverflow: "ellipsis ellipsis",
    maxHeight: 100,
  },
  content: {
    maxHeight: 200,
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
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
