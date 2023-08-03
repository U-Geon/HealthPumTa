import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import SGHeader from "./SetGoal.jsx";
import SGHeader2 from "./SetGoal2.jsx";
import Mypage from "./Mypage.jsx";
import Settings from "./Settings.jsx";
import EGHeader from "./EditGoal.jsx";
import EGHeader2 from "./EditGoal2.jsx";






function App(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mypage />} />
            {/* 임시 코드 */}
            {/* <Route path="/Mypage" element={<Mypage />} /> */}
            {/* 임시 코드 */}
            <Route path="/SetGoal" element={<SGHeader />} />
            <Route path="/SetGoal2" element={<SGHeader2 />} />
            <Route path="/EditGoal" element={<EGHeader />} />
            <Route path="/EditGoal2" element={<EGHeader2 />} />
            <Route path="/Settings" element={<Settings />} />
            
          </Routes>
        </BrowserRouter>
    );
}

export default App;
