import React from "react";
import location from "../image/Fill219.svg";

function Card(props) {
  return (
    <div className="full-card">
      <div id="card">
        <img src={props.imageUrl} alt="mount fuji" className="card--img" />
        <div>
          <div className="small-heading">
            <img src={location} alt="location logo" />
            <h1>{props.location}</h1>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="card--title">{props.title}</h1>
          <p className="card--date">
            {props.startDate} - {props.endDate}
          </p>
          <div className="card--description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Card;
