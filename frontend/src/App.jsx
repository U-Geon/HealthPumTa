import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/components/Login/Login";
import Main from "./pages/components/Main/Main";
import Logo from "./pages/components/Logo/Logo";
import Join from "./pages/components/Join/Join";
import MyPage from "./pages/components/MyPage/MyPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="Login" element={<Login />} />
        <Route path="Main" element={<Main />} />
        <Route path="Join" element={<Join />} />
        <Route path="MyPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
