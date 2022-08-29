import React from "react";
import { ChannelContainer, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__header">
        <img src={HospitalIcon} alt="hospital" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__header">
        <img src={LogoutIcon} alt="hospital" width="30" />
      </div>
    </div>
  </div>
);

const ChannelListContainer = () => {
  return (
    <div>
      <h1>ChannelListContainer</h1>
    </div>
  );
};

export default ChannelListContainer;
