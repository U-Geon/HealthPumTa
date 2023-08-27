import React from 'react';

import HeaderText from "../Reuse/HeaderText.jsx";
import HeaderButton from "../Reuse/HeaderButton.jsx";
import GoalEditInput from "./GoalEditInput.jsx";
import BottomButtonTwoWay from '../Reuse/BottomButtonTwoWay.jsx';
import GoalEditCheckList from './GoalEditCheckList.jsx';
import * as L from "./EditGoalStyle.js";
import isWname from "./GoalEditInput.jsx";


function EditGoal(){
    return <L.Wrapper>
        <HeaderText/>
        <HeaderButton/>
        <GoalEditInput/>
        <GoalEditCheckList/>
        <BottomButtonTwoWay style = {
            isWname ? {} : {backgroundColor : '#D9D9D9'} }>
        </BottomButtonTwoWay>
    </L.Wrapper>;
}

export default EditGoal;