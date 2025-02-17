const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const SECRET_KEY = process.env.SECRET_KEY; // ✅ Use env variable

module.exports = async (req, res) => {
  try {
    const { company_code, employee_code, password } = req.body;
    if (!company_code || !employee_code || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const foundUser = await User.findOne({
      where: { org_id: company_code, employee_code },
      attributes: ["user_id", "org_id", "employee_code", "role", "password_hash"],
    });

    if (!foundUser) {
      return res.status(401).json({ success: false, message: "Invalid credentials: User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials: Incorrect password" });
    }

    // ✅ Generate JWT Token using environment variable
    const token = jwt.sign(
      { user_id: foundUser.user_id, org_id: foundUser.org_id, role: foundUser.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token, // Send token in response
      user: {
        user_id: foundUser.user_id,
        org_id: foundUser.org_id,
        employee_code: foundUser.employee_code,
        role: foundUser.role,
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};
