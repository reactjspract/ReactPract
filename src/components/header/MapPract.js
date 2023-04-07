import React from "react";
import JokesData from "./jokesData.json";

const MapPract = () => {
  const colors = ["Yellow", "White", "Blue", "White", "Pink"];
  return (
    <div>
      <div className="map-sec">
        {colors.map((color) => {
          return <h3>"{color}"</h3>;
        })}
        <br />
        {JokesData.map((joke) => {
          return (
            <p key={joke.id}>
              {joke.id}.{joke.punch}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MapPract;
