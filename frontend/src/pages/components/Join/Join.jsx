// import React, { component } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import SGHeader from "./SetGoal.jsx";
import Signup from "./Signup";
import Information from "./Information";
import * as L from "./WrapperStyle";

function Join() {
  return (
    <div>
      <L.Wrapper>
        <Signup />
        <Information />
      </L.Wrapper>
    </div>
  );
}

export default Join;
