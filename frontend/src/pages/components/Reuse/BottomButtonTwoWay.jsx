import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import * as L from "./BottomButtonTwoWayStyle";

const backButton = "이전";
const nextButton = "완료";

function BottomButtonTwoWay(){
    return (
        <L.ReuseButtonWrapper>
            <L.ReuseButtonContainer>
                <L.LStyledLink to="/">
                    {backButton}
                </L.LStyledLink>
            </L.ReuseButtonContainer>
            <L.ReuseButtonContainer>
                <L.RStyledLink to="/">
                    {nextButton}
                </L.RStyledLink>
            </L.ReuseButtonContainer>
        </L.ReuseButtonWrapper>
        
    )
}

export default BottomButtonTwoWay;