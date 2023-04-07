import React, { useState } from "react";
const UserContact = () => {
  const [userData, setuserData] = useState({
    id: 1,
    name: "kalyani",
    phone: "+919014951234",
    email: "Rk@gmail.com",
    isLike: false,
  });

  const handleButton = () => {
    setuserData((preval) => {
      return {
        ...userData,
        isLike: !preval.isLike,
      };
    });
  };
  return (
    <>
      <h3>Welcome to user contact page!!</h3>
      <p key={userData.id}>Name is: {userData.name}</p>
      <p key={userData.id}>Contact is: {userData.phone}</p>
      <p key={userData.id}>
        Have likes: {userData.isLike ? "Yes" : "No likes"}
      </p>
      <button onClick={handleButton}>Like/Dislike</button>
    </>
  );
};
export default UserContact;
