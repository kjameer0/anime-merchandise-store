const router = require("express").Router();
const { Op } = require("sequelize");
const {
  models: { User, Product },
} = require("../db");
const { checkIsAdmin } = require("./utils");

// GET /api/products
router.get("/", async (req, res, next) => {
  try {
    const items = await Product.findAll({
      where: {
        stock: {
          [Op.ne]: 0,
        },
      },
    });
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /api/products/:id
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Product.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// POST /api/products
router.post("/", checkIsAdmin, async (req, res, next) => {
  try {
    const item = await Product.create(req.body);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// update products
// PUT /api/products/:id
router.put("/:id", checkIsAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    product.set(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/products/:id
router.delete("/:id", checkIsAdmin, async (req, res, next) => {
  try {
    const result = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (result) res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
