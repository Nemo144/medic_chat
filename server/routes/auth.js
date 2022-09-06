const express = require("express");

//getting a router from express
const router = express.Router();

//creating 2 different routes - Post routes for sending data from frontend to backend
router.post("/signup");
router.post("/login");
