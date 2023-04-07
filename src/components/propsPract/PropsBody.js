const PropsBody = (props) => {
  // const { user } = props;
  return (
    <>
      <h4>Welcome back, {props.user}</h4>
      <PropsComp user={props.user} />
    </>
  );
};
export default PropsBody;

export const PropsComp = (props) => {
  return (
    <>
      <h4>
        Props component passed value through child to child by {props.user}
      </h4>
    </>
  );
};
