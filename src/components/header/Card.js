import React from "react";
import reactImg from "../images/reactjs_img.jpg";
import UsersData from "../header/usersData";

const Card = (props) => {
  console.log(props);
  return (
    <div
      className="react-img-sec"
      style={{
        display: "flow",
      }}
    >
      <div>
        <img
          src={reactImg}
          alt="react-img"
          className="react-img"
          style={{
            width: "200px",
            height: "250px",
            padding: "0 10px 0 0",
          }}
        />
      </div>
      <div className="img-status">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="15"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <span>
          {props.rating}({props.reviewCount}).{props.country}
        </span>
      </div>
      <div>
        <span>{props.title}</span>
        <br />
        <span>
          <b>from ${props.price}</b>/person
        </span>
      </div>
      <br />
      <br />
      <UsersData />
    </div>
  );
};

export default Card;
