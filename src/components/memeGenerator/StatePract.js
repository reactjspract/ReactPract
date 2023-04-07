import React, { useState } from "react";

const StatePract = () => {
  const [name, setname] = useState("");
  const [count, setcount] = useState(0);

  const data = new Date();
  const hours = data.getHours();

  let timeOfDay;
  if (hours >= 4 && hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 15) {
    timeOfDay = "Afternoon";
  } else if (hours >= 15 && hours < 20) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <h3>
          "Good {timeOfDay}, {name}!"
        </h3>
      </div>
      <br />
      <div className="counter-sec">
        <h3>Welcome to Counter App</h3>
        <h4>The count value is {count}</h4>
        <button onClick={() => setcount(count + 1)}>+</button>
        &nbsp; &nbsp;
        <button onClick={() => setcount(count - 1)}>-</button>
      </div>
    </>
  );
};

export default StatePract;
