import React from "react";
import "./Header.css";

const Home = () => {
  return (
    <div className="header__nav">
      <div className="header__option">
        <span className="header__optionLineOne">Home</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineTwo">Weather</span>
      </div>
      <div className="header__option">
        <span className="header__optionLineThree">Signout</span>
      </div>
    </div>
  );
};

export default Home;
