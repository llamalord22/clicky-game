import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    <ul>
      <li>
        <strong>{props.name} </strong>
      </li>
    </ul>
    </div>
  </div>
);

export default Card;
