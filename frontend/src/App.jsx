import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/components/Login/Login";
import Time from "./pages/components/Time/Time";
import Main from "./pages/components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="Time" element={<Time />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
