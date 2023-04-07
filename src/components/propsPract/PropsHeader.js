import React from "react";
import PropsBody from "./PropsBody";

export const PropsHeader = () => {
  const [user, setuser] = React.useState("Kalyani");

  return (
    <>
      <h3>Current user is: {user}</h3>
      <PropsBody user={user} />
      <PropsInfo user={user} />
    </>
  );
};

const PropsInfo = (props) => {
  return (
    <>
      <h4>Props pract in same file passing props by {props.user}</h4>
    </>
  );
};
export default PropsInfo;
