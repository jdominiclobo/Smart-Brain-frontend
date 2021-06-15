import React from "react";
import "./Logo.css";
import Tilt from "react-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img stle={{ paddingTop: "5px" }} alt="logo" src={brain}></img>{" "}
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
