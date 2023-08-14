import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Goal from "./pages/components/Goal/Goal.jsx";
import EditGoal from "./pages/components/EditGoal/EditGoal.jsx";


function LinkManager () {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Goal />} />
            {/* 임시 코드 */}
            {/* <Route path="/goal" element={<Mypage />} /> */}
            {/* 임시 코드 */}
            <Route path="/goal/edit" element={<EditGoal />} />
          </Routes>
        </BrowserRouter>
    );
}

export default LinkManager;