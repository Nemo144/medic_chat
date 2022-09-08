const express = require("express");

const { signup, login } = require("../controllers/auth.js");

//getting a router from express
const router = express.Router();

//creating 2 different routes - Post routes for sending data from frontend to backend
router.post("/signup", signup);
router.post("/login", login);

//exporting the router
module.exports = router;
