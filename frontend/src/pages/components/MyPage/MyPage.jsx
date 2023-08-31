// import React, { component } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import SGHeader from "./SetGoal.jsx";
import EditProfile from "./EditProfile";
import * as L from "../Join/WrapperStyle";

function MyPage() {
  return (
    <div>
      <L.Wrapper>
        <EditProfile></EditProfile>
      </L.Wrapper>
    </div>
  );
}

export default MyPage;
