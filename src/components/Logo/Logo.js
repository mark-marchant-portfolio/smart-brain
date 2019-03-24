import React from "react";
import Tilt from "react-tilt";
import smartbrain from "./smartbrain.png"; /* https://icons8.com/icon/set/brain/ios */
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br shadow-2"
        options={{ max: 65, perspective: 1000 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img
            style={{ paddingTop: "5px" }}
            alt="thinking brain"
            src={smartbrain}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
