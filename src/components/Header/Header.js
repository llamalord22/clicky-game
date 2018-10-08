
import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="instructions">Click a character to start! The goal is to never click the same character twice, if you do you lose!</div>
    <div className="score">
      Current Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;