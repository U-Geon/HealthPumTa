import React from 'react';
import {
  BrowserRouter, 
  Route, 
  Routes} 
  from 'react-router-dom';
import Login from "./pages/Login";
import Time from "./pages/Time";
import Main from "./pages/Main";

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
