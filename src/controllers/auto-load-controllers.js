const fs = require("fs");
const path = require("path");

const controllers = {};

// Dynamically require all controller files
fs.readdirSync(__dirname).forEach((file) => {
    if (file !== "auto-load-controllers.js" && file.endsWith(".js")) {
        // Remove both ".controller.js" or just ".js" if there's no "controller"
        const controllerName = file.replace(/\.controller\.js$|\.js$/i, ""); 
        controllers[controllerName] = require(path.join(__dirname, file));
    }
});

module.exports = controllers;
