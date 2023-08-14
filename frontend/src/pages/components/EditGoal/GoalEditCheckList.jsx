import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import * as L from "./GoalEditCheckListStyle";


const AddButton = "+";
const RemoveButton = "-";
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
                    <input type="text" style={{
                        backgroundColor : '#D9D9D9',
                        width : '80%',
                        height : '4vh',
                        border : 'none'}}/>
                    <L.DeleteButton>
                        {RemoveButton}
                    </L.DeleteButton>
                </L.InputStyle>
                <L.InputStyle>
                    <input type="text" style={{
                        backgroundColor : '#D9D9D9',
                        width : '80%',
                        height : '4vh',
                        border : 'none'}}/>
                    <L.DeleteButton>
                        {RemoveButton}
                    </L.DeleteButton>
                </L.InputStyle>
                <L.InputStyle>
                    <L.PlusButton>
                        {AddButton}
                    </L.PlusButton>
                </L.InputStyle>
            </L.SettingContainer>        
        </L.QuestionContainer>
    
    );
}

export default GoalEditCheckList;