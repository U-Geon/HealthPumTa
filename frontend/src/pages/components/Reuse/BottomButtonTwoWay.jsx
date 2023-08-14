import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import * as L from "./BottomButtonTwoWayStyle";

const backButton = "이전";
const nextButton = "다음";

function BottomButtonTwoWay(){
    return (
        <L.ReuseButtonWrapper>
            <L.ReuseButtonContainer>
                <L.StyledLink to="/">
                    {backButton}
                </L.StyledLink>
            </L.ReuseButtonContainer>
            <L.ReuseButtonContainer>
                <L.StyledLink to="/">
                    {nextButton}
                </L.StyledLink>
            </L.ReuseButtonContainer>
        </L.ReuseButtonWrapper>
        
    )
}

export default BottomButtonTwoWay;