import React from "react";
import vinayaka from "../images/reactjs_img.jpg";
import LocalPhoneRoundedIcon from "../images/phone-img.png";
import emailImg from "../images/email-img.png";

const Contact = ({ name, phone, email }) => {
  // Best one is use props
  // 1. Props -> {props.name} from one loc to another loc using properties, so name like props.

  // 2. Another way is declare a object into json, then destructuring with object name, so use {name}
  // const details = {
  //   name: "Vinayaka",
  //   phone: "9014951234",
  //   email: "vinayaka01@gmail.com",
  // };
  // const { name, img, phone, email } = details;

  //3. another way is in the place of props directly destructure like Contact=({ name, img, phone, email }), then use directly {name}

  return (
    <div className="contact-sec">
      <img src={vinayaka} alt="Vinayaka" />
      <h3>{name}</h3>
      <div
        className="phone-info"
        style={{
          display: "flex",
        }}
      >
        <img
          src={LocalPhoneRoundedIcon}
          alt="pgone-img"
          style={{
            width: "20px",
          }}
        />
        &nbsp;
        <p>{phone}</p>
      </div>
      <div
        className="mail-info"
        style={{
          display: "flex",
        }}
      >
        <img
          src={emailImg}
          alt="mail img"
          style={{
            width: "20px",
          }}
        />{" "}
        &nbsp;
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;
