import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import * as L  from "./HeaderButtonStyle";


const IndividualGoalButton = "개인 목표";
const GroupGoalButton = "그룹 목표";
const GroupButton = "그룹";

function HeaderButton () {
    return(
        <L.ButtonWrapper>
            <L.ButtonRow color = '#4E4FEB'>
                <L.StyledLink to="/">
                    {IndividualGoalButton}
                </L.StyledLink>
            </L.ButtonRow>
            <L.ButtonRow>
                {GroupGoalButton}
            </L.ButtonRow>
            <L.ButtonRow>
                {GroupButton}
            </L.ButtonRow>
        </L.ButtonWrapper>
    );
    
}


export default HeaderButton;