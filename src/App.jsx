import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import SGHeader from "./SetGoal.jsx";
import Mypage from "./Mypage.jsx";


function App(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mypage />} />
            {/* 임시 코드 */}
            {/* <Route path="/Mypage" element={<Mypage />} /> */}
            {/* 임시 코드 */}
            <Route path="/SetGoal" element={<SGHeader />} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;
