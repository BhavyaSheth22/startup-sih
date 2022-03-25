const jwt = require("jsonwebtoken");

module.exports = {
  signToken(id) {
    return jwt.sign({ id }, "vjti-central-secret-for-jsonwebtoken", {
      expiresIn: "90d"
    });
  }
};
