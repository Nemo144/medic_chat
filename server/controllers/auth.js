const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const streamChat = require("stream-chat");
const crypto = require("crypto");

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_KEY;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  try {
    //info we need to get(req) from the frontend
    const { fullName, username, password, phoneNumber } = req.body;

    //to create a random crypto string for the user id
    //this will create a random number of 16 hexidecimal digits
    const userId = crypto.randomBytes(16).toString("hex");

    //to make a connection between the getstream and the server
    const serverClient = connect(api_key, api_secret, app_id);

    //creating a hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    //creating a token for the user
    const token = serverClient.createUserToken(userId);

    //returning the data to the frontend via the res method
    res
      .status(200)
      .json({ fullName, userId, username, hashedPassword, token, phoneNumber });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

const login = (req, res) => {
  try {
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

module.exports = { signup, login };
