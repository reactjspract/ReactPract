import React from "react";
import data from "./boxesData.json";
import Box from "./Box";

export default function Boxes() {
  const [boxData, setboxData] = React.useState(data);

  function toggle(id) {
    setboxData((prevSqur) => {
      return prevSqur.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  }

  const sqrElm = boxData.map((box) => (
    <Box key={box.id} on={box.on} id={box.id} toggle={toggle} />
  ));

  return <div> {sqrElm} </div>;
}
