const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'yoursecret23123213', { expiresIn: "30d" });
};

module.exports = generateToken
