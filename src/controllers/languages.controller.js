const Language = require("../models/languages"); // Ensure correct model path

module.exports = async (req, res) => {
  try {
    const languages = await Language.findAll();

    if (languages.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.json({ languages });
  } catch (error) {
    console.error("Error fetching languages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
