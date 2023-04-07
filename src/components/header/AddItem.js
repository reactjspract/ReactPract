import React, { useState } from "react";

const AddItem = () => {
  const [oldValues, setoldValues] = useState([
    "vinayaka",
    "Saraswathi",
    "Lalithamma",
    "Saibaba",
    "Narayana",
  ]);
  const [newValues, setnewValues] = useState("");

  const handleClick = () => {
    setoldValues([...oldValues, newValues]);
    setnewValues("");
  };

  return (
    <div>
      <input
        type="text"
        className="text1"
        placeholder="Add item here.."
        value={newValues}
        onChange={(e) => setnewValues(e.target.value)}
      />
      &nbsp; &nbsp;
      <button className="button" onClick={handleClick}>
        Add item
      </button>
      {oldValues.map((val) => {
        return <p>{val}</p>;
      })}
      <br />
      <h4>Now add item is working fine</h4>
    </div>
  );
};

export default AddItem;
