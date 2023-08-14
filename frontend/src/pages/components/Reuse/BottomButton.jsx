import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import * as L from "./BottomButtonStyle";

const GoalButton = "목표";
const TimerButton = "타이머";
const InfoButton = "내정보";


function BottomButton () {
    return(
        <L.ButtonWrapper>
            <L.ButtonRow color = '#4E4FEB'>
                <L.StyledLink to="/">
                    {GoalButton}
                </L.StyledLink>
            </L.ButtonRow>
            <L.ButtonRow>
                {TimerButton}
            </L.ButtonRow>
            <L.ButtonRow>
                {InfoButton}
            </L.ButtonRow>
        </L.ButtonWrapper>
    );
    
}


export default BottomButton;