const User = require("../db/models/User");

async function checkIsAdmin(req, res, next) {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    if (user.admin === true) next();
    else res.sendStatus(401);
  } catch (error) {
    next(error);
  }
}

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkIsAdmin,
  requireToken,
};
