import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import GoalEditModal from "../EditGoal/GoalEditModal";
import * as L from "./CircleButtonStyle";


const buttonText = ['삭제'];



function CircleButton () {
    return(
        <div>
            <L.EditDeleteButtonContainer>
                <GoalEditModal/>
                <L.EditDeleteButton>
                    {buttonText[0]}
                </L.EditDeleteButton >
            </L.EditDeleteButtonContainer>
        </div>
    );
    
}

export default CircleButton;