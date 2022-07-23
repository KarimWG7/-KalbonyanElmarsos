import React from "react";

const DempOutput = (props) => {
  console.log('Hola');
  return <p>{props.show ? "This is new!" : ""}</p>;
};
export default React.memo(DempOutput);
