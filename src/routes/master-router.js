const express = require("express");
const controllers = require("../controllers/auto-load-controllers"); // Load all controllers
const authMiddleware = require("../middlewares/auth.middleware"); // Import middleware (for protected routes)
const router = express.Router();

// Define all routes here
const routes = [
  { path: "/", method: "get", controller: "root" },
  { path: "/login", method: "post", controller: "login" },
  { path: "/languages", method: "post", controller: "languages", middleware: authMiddleware },
  { path: "/organizations", method: "post", controller: "organizations", middleware: authMiddleware },
  { path: "/users", method: "post", controller: "users", middleware: authMiddleware },
  //{ path: "/dashboard", method: "get", controller: "dashboard", middleware: authMiddleware }, // Protected Route
];

// Auto-register routes
routes.forEach(({ path, method, controller, middleware }) => {
  if (!router[method]) {
    console.error(`Invalid HTTP method '${method}' for route '${path}'`);
    return;
  }

  if (!controllers[controller]) {
    console.error(`Controller '${controller}' not found for route '${path}'`);
    return;
  }

  if (middleware) {
    router[method](path, middleware, controllers[controller]); // Apply middleware if defined
  } else {
    router[method](path, controllers[controller]); // Register route normally
  }

  console.log(`Route registered: [${method.toUpperCase()}] ${path} -> ${controller}`);
});

module.exports = router;
