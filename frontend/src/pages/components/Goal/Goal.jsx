import React from 'react';
import HeaderText from "../Reuse/HeaderText";
import HeaderButton from "../Reuse/HeaderButton";
import BottomButton from "../Reuse/BottomButton";
import GoalBox from "../EditGoal/GoalBox";
import * as L from "./GoalStyle";

function Goal () {
    return(
        <L.Wrapper>
            <HeaderText/>
            <HeaderButton/>
            <GoalBox/>
            <BottomButton/>
            
        </L.Wrapper>
    );
    
}


export default Goal;




             