import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer, Auth } from "./components";
import "./App.css";

//if authToken = false, we can get the data by using the cookies
const cookies = new Cookies();

const apiKey = process.env.STREAM_API_KEY;

//to get the data set in auth.jsx for the cookies
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  //if we have the authToken, we want to create the user
  client.connectUser(
    {
      // id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

const App = () => {
  if (!authToken) {
    return <Auth />;
  }
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
