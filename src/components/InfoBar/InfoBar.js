import React from "react";

import "./InfoBar.css";
import close from "../../icons/Close.png";
import onlineIcon from "../../icons/white-email.png";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" style={{ width: "40px" }} />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={close} alt="close icon" style={{ width: "10px" }} />
      </a>
    </div>
  </div>
);

export default InfoBar;
