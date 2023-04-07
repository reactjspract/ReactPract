import React from "react";
import usersData from "./usersData.json";

const UsersData = () => {
  // const [userData, setuserData] = useState(usersData);

  return (
    <>
      <h3>Users data displaying through props</h3>
      {usersData.map((userInfo) => {
        return (
          <div className="user-info">
            {/* <h4 key={userInfo.id}>{userInfo.name}</h4> */}
            {/* {(userInfo.actualName && userInfo.name) === null || "" ? ( */}
            <ol
              key={userInfo.id}
              style={{
                display: "flex",
                alignItems: "baseline",
                padding: "10px",
              }}
            >
              <li>
                {userInfo.name === ("" && null) ? "no name" : userInfo.name}
              </li>
              <li>
                {userInfo.actualName === ("" || null)
                  ? "no fullname"
                  : userInfo.actualName}
              </li>
              <li>{userInfo.displayName}</li>
            </ol>
          </div>
        );
      })}
    </>
  );
};

export default UsersData;
