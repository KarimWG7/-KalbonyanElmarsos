const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisismelearningthecourse");
    const user = await User.findOne({
      _id: decoded,
      "tokens.token": token,
    });
    if (!user) {
      res.status(404)
      throw new Error();
    }
    req.token = token
    req.user = user;
    next();

  } catch (err) {
    res.status(400).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
 