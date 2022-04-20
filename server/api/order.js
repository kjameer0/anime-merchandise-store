const router = require("express").Router();

const {
  models: { User, Order },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    const orders = await Order.findAll({
      where: {
        userId: user.id,
      },
    });

    res.json(orders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
