const express = require("express");
const cors = require("cors");

//to require routes for sign in and sign up
const authRoutes = require("./routes/auth.js");

//creating an instance of the express application
const app = express();

//creating the port for our application
const PORT = process.env.PORT || 5000;

//to be able to call the env variables in the node application
require("dotenv").config();

//setting up the middlewares

app.use(cors()); //calling cors inside the use will allow me make cross origin request

app.use(express.json()); //this will allow me to pass json payloads from the frontend to the backend

app.use(express.urlencoded());

//to create the route for my application
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
