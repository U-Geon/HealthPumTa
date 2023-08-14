import React from 'react';

import HeaderText from "../Reuse/HeaderText.jsx";
import HeaderButton from "../Reuse/HeaderButton.jsx";
import GoalEditInput from "./GoalEditInput.jsx";
import BottomButtonTwoWay from '../Reuse/BottomButtonTwoWay.jsx';
import GoalEditCheckList from './GoalEditCheckList.jsx';
import * as L from "./EditGoalStyle.js";



function EditGoal(){
    return <L.Wrapper>
        <HeaderText/>
        <HeaderButton/>
        <GoalEditInput/>
        <GoalEditCheckList/>
        <BottomButtonTwoWay/>
    </L.Wrapper>;
}

export default EditGoal;