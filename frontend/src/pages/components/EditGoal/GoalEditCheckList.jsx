import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import * as L from "./GoalEditCheckListStyle";
import GoalList from "../Goal/GoalList";


// 텍스트만 적어둔 배열
const text = "세부 목표를 설정해 주세요";



function GoalEditCheckList(){
    return (
        <L.QuestionContainer>
            <L.SettingContainer>
                <L.TextStyle>
                    {text}
                </L.TextStyle>
                <L.InputStyle>
                    <GoalList/>
                </L.InputStyle>
            </L.SettingContainer>        
        </L.QuestionContainer>
    
    );
}

export default GoalEditCheckList;