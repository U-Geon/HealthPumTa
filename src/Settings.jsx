import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import styled from "styled-components";


const StyledLink = styled(Link)`
    color : #FFFFFF;
    font-size : 20px;
    display : flex;
    justify-content : center;
    text-decoration : none;
`;

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    margin : 5vh 0vh 0vh 0vh;
    width : 100%;
    gap : 1vh;
    justify-content : center;
    text-align : center;
`;

const NickNameText = styled.div`
    font-size : 30px;
    display : flex;
    justify-content :center;
`;

const MainText = styled.div`
    font-size : 25px;
    padding : 0vh 0vh 2vh 0vh;
    display : flex;
    justify-content : center;
`;

const ButtonWrapper = styled.div`
    display : flex;
    flex-direction : row;
    gap : 1vh;
    justify-content : center;
`;

// 3개짜리 버튼 스타일
const ButtonRow1 = styled.div`
    background-color : #4E4FEB;
    color : white;
    width : 12vh;
    font-size : 20px;
    border-radius : 10px;
    height : 7vh;
    display : flex;
    align-items : center;
    text-align : center;
    justify-content : center;
`;
// 시작하기 버튼 스타일
const ButtonRow2 = styled.div`
    background-color : #4E4FEB;
    color : white;
    width : 18.5vh;
    font-size : 20px;
    border-radius : 10px;
    height : 7vh;
    display : flex;
    align-items : center;
    text-align : center;
    justify-content : center;
    
`;


// 목표 체크리스트 관련 변수
const NickName = "OOO";
const Text = "님,";
const Text2 = "어떤 정보를 수정하시겠어요?";
const IndividualGoalButton = "목표 보기(개인)";
const GroupGoalButton = "목표 보기(그룹)";
const GroupButton = "그룹 보러 가기";
const StartButton = "시작하기";
const SettingButton = "설정";




const Header=()=>{
    return (
        <Wrapper>
            <NickNameText>
                {NickName}{Text}
            </NickNameText>
            <MainText>
                {Text2}
            </MainText>
            <ButtonWrapper>
                <ButtonRow1>
                    <StyledLink to="/">
                        {IndividualGoalButton}
                    </StyledLink>
                </ButtonRow1>
                <ButtonRow1>
                    {GroupGoalButton}
                </ButtonRow1>

                <ButtonRow1>
                    {GroupButton}
                </ButtonRow1>
            </ButtonWrapper>
            <ButtonWrapper>
                <ButtonRow2>
                    {StartButton}
                </ButtonRow2>

                <ButtonRow2>
                    <StyledLink to="/Settings">
                        {SettingButton}
                    </StyledLink>
                </ButtonRow2>              
            </ButtonWrapper>
        </Wrapper>
    );
};

const backButton = "이전";
const nextButton = "수정 완료";
const ReuseButtonContainer = styled.div`
    background-color : #4E4FEB;
    color : white;
    width : 18vh;
    font-size : 20px;
    border-radius : 10px;
    height : 5vh;
    display : flex;
    align-items : center;
    text-align : center;
    justify-content : center;
    margin-top : 20vh;
`;
const ReuseButtonWrapper = styled.div`
    display : flex;
    flex-direction : row;
    gap : 1vh;
    justify-content : center;
`;

const ReuseButtonTextStyle = styled.div`
    text-decoration : none;
    color : white;
`;



const ReuseButton = () =>{
    
    return (
        <ReuseButtonWrapper>
            <ReuseButtonContainer>
                <StyledLink to="/">
                    {backButton}
                </StyledLink>
            </ReuseButtonContainer>
            <ReuseButtonContainer>
                <StyledLink to="/SetGoal2">
                    {nextButton}
                </StyledLink>
            </ReuseButtonContainer>
        </ReuseButtonWrapper>
        
    )
    
}


function Settings () {
    return(
        <div>
            <Header/>
            <ReuseButton/>
        </div>
    );
    
}


export default Settings;




             