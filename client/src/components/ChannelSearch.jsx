import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //TODO: fetch channels
    } catch (error) {
      //if there is no chat
      setQuery("");
    }
  };

  const onSearch = (event) => {
    //for every input or button or...event.preventDefault is necessary
    event.preventDefault();

    setLoading(true);

    //in react, whenever you type into an input, you get the value of that text under the event.target.value
    setQuery(event.target.value);

    //to get the chat channels
    getChannels(event.target.value);
  };
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>

        <input
          className="channel-search__input__text"
          placeholder="search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
