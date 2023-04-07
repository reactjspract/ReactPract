// import data from "./boxesData.json";
import React from "react";

export default function Box(props) {
  // const [colChange, setcolChange] = React.useState(props.on);
  // function colorChange() {
  //   setcolChange((preOn) => !preOn);
  // }
  const styles = {
    backgroundColor: props.on ? "black" : "transparent",
  };

  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}
