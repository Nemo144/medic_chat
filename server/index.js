const express = require("express");
const cors = require("cors");

//creating an instance of the express application
const app = express();

//creating the port for our application
const PORT = process.env.PORT || 5000;

//to be able to call the env variables in the node application
require("dotenv").config();

//setting up the middlewares

app.use(cors()); //calling cors inside the use will allow me make cross origin request

app.use(express.json()); //this will allow me to pass json payloads from the frontend to the backend
