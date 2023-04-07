import React from "react";

const PropsPract = () => {
  const fName = "Kalyani";
  const lName = "Rayavarapu";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good Afternoon";
  } else {
    timeOfDay = "Good Night";
  }

  return (
    <div>
      <h3>
        Hello {fName} {lName}, {timeOfDay}
      </h3>
    </div>
  );
};

export default PropsPract;
