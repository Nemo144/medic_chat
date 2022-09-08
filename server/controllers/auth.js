const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();

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

const login = async (req, res) => {
  try {
    //info we neet to get from the frontend
    const { username, password } = req.body;

    //to make a connection between the getstream and the server
    const serverClient = connect(api_key, api_secret, app_id);

    //creating a new instance of a stream-chat
    const client = StreamChat.getInstance(api_key, api_secret);

    //querying all the users from the database that match this particular username
    const { users } = await client.queryUsers({ name: username });

    //if the user is not found
    if (!users.length)
      return res.status(400).json({ messgae: "user not found" });

    //if username matches, then we have to decrypt the password to see
    //if it matches the one the user created the account with.
    const success = await bcrypt.compare(password, users[0].hashedPassword);

    //creating a new user token
    const token = serverClient.createUserToken(users[0].id);

    //if all is successfull, we want to send all the data back to the frontend
    if (success) {
      res.status(200).json({
        username,
        password,
        token,
        fullName: users[0].fullName,
        userId: users[0].id,
      });
    } else {
      res.status(500).json({ message: "incorrect password" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

module.exports = { signup, login };
