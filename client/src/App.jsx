import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
// import Cookies from "universal-cookie ";
import { ChannelListContainer, ChannelContainer } from "./components";
import "./App.css";

const apiKey = "w5z7t2a99tum";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />

        <ChannelListContainer />
      </Chat>
    </div>
  );
};

export default App;
