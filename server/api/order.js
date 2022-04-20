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

router.get("/:id", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const id = req.params.id;
    const user = await User.findByToken(token);
    const order = await Order.findOne({
      where: {
        userId: user.id,
        id: id,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
