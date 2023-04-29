const jwt = require("jsonwebtoken");
const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const decoded = jwt.verify(token, "food");
    console.log(decoded);

    if (decoded) {
      req.body.userId = decoded.user_id; // relationship
      next();
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  authentication,
};
