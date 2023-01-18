import React from "react";
import WlanOff from "../assets/wlan-off.svg";

const Error = () => {
  return (
    <div className="loading">
      <div className="error">
        <img src={WlanOff} alt="error" />
        <h2>network error</h2>
        <h5>make sure use a proper proxy</h5>
      </div>
    </div>
  );
};

export default Error;
