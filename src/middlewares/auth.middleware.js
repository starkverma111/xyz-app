require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY; //  Use env variable

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from headers

  if (!token) {
    return res.status(401).json({ success: false, message: "Access Denied: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verify token
    req.user = decoded; // Attach user data to request
    next(); // Proceed to next middleware
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid Token" });
  }
};
