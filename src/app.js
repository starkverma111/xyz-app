const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database"); // Import database connection
const app = express(); // Initialize Express

// Enable CORS for all routes
app.use(cors());
app.use(express.json()); //  Allows parsing JSON request bodies
app.use(express.urlencoded({ extended: true }));

const masterRouter = require("./routes/master-router"); // Correct import
app.use("/api", masterRouter); // Use the router

module.exports = app; // Export app correctly
