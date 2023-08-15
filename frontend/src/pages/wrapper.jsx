import React from "react";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  width: "390px",
  heigth: "844px",
  margin: "5vh 0vh 0vh 0vh",
  width: "100%",
  gap: "1vh",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "balck",
  boxShadow: "x-position",
};

const Wrapper = ({ children }) => {
  return <div style={wrapperStyle}>{children}</div>;
};

export default Wrapper;
