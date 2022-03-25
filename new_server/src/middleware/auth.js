const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = {
  loginRequired(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, config.privateKey, (err, decoded) => {
        if (!err) {
          const d = new Date();
          console.log(Number(decoded.exp) * 1000, d.getTime());
          if (decoded && Number(decoded.exp) * 1000 > d.getTime()) {
            req.userId = decoded.id;
            next();
          } else {
            return res.status(401).json({ error: "Token has expired" });
          }
        } else {
          return res.status(401).json({ error: err.message });
        }
      });
    } catch (e) {
      return res.status(401).json({ error: e.message });
    }
  }
};
