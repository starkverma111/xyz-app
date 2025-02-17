const user = require("../models/users"); // Ensure correct model path

module.exports = async (req, res) => {
  try {
    const users = await user.findAll();

    if (users.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
