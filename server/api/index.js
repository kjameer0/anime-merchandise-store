const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));

// add the /cart
router.use("/cart", require("./cart"));

// add the /products
router.use("/products", require("./products"));

router.use("/orders", require("./order"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
