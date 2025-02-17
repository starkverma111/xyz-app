const organization = require("../models/organizations"); // Ensure correct model path

module.exports = async (req, res) => {
  try {
    const organizations = await organization.findAll();

    if (organizations.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.json({ organizations });
  } catch (error) {
    console.error("Error fetching languages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
