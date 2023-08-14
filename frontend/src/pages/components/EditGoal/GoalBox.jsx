import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import CircleButton from "../Goal/CircleButton";
import * as L from "./GoalBoxStyle";


// 목표 체크리스트 관련 변수


const todayGoalText = "오늘의 목표";
const weight = "(근력 운동)";
const cardio = "(유산소)";
const workoutname = "벤트오버레터럴레이즈";
const detailedgoal = "80kg 5 x 5";
const cardioname = "러닝머신어쩌구";


function GoalBox () {
    return(
        <div>
            <L.Wrapper>
                <L.GoalContainer>
                    <L.GoalMainText>
                        {todayGoalText}{weight}
                    </L.GoalMainText>
                    <L.GoalBoxText>
                        <L.GoalCheckList>
                            {workoutname}
                        </L.GoalCheckList>
                        <L.GoalCheckList>
                            {detailedgoal}
                        </L.GoalCheckList>
                    </L.GoalBoxText>
                </L.GoalContainer>
                <CircleButton/>
                <L.GoalContainer>
                    <L.GoalMainText>
                        {todayGoalText}{cardio}
                    </L.GoalMainText>
                    <L.GoalBoxText>
                        <L.GoalCheckList>
                            {cardioname}
                        </L.GoalCheckList>
                        <L.GoalCheckList>
                            {detailedgoal}
                        </L.GoalCheckList>
                    </L.GoalBoxText>
                </L.GoalContainer>
                <CircleButton/>
            </L.Wrapper>
        </div>
    );
}

export default GoalBox;