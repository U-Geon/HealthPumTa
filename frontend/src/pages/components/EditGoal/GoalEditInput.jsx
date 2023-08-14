import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import * as L from "./GoalEditInputStyle";


// 텍스트만 적어둔 배열
const text = ["운동의 종류를 선택해 주세요.","운동 이름을 적어주세요."];

function GoalEditInput(){
    return (
        <L.QuestionContainer>
            <L.SettingContainer>
                <L.TextStyle>
                    {text[0]}
                </L.TextStyle>
                <L.InputStyle>
                    <input type="radio"/>근력운동
                    <input type="radio"/>유산소
                </L.InputStyle>
            </L.SettingContainer>        
            <L.SettingContainer>
                <L.TextStyle>
                    {text[1]}
                </L.TextStyle>
                <L.InputStyle>
                    <input type="text" style={{width : '50%',
                    backgroundColor : '#D9D9D9',
                    border : '0px',
                    height : '4vh'
                    }}/>
                </L.InputStyle>
            </L.SettingContainer>
            
        </L.QuestionContainer>
    
    );
}


export default GoalEditInput;