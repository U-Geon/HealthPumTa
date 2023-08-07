import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import "./App.jsx"
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
const Text2 = "어떤 목표를 수정하시겠어요?";
const IndividualGoalButton = "목표 보기(개인)";
const GroupGoalButton = "목표 보기(그룹)";
const GroupButton = "그룹 보러 가기";
const StartButton = "시작하기";
const SettingButton = "설정";    


const EGHeader=()=>{
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

const QuestionContainer = styled.div`
    display : flex;
    flex-direction : column;
    margin : 1vh 0vh 0vh 0vh;
    width : 100%;
    gap : 1vh;
    justify-content : center;
`;


// 텍스트만 적어둔 배열
const text = ["운동의 종류를 선택해 주세요","목표 시간을 적어 주세요"];
// 텍스트 스타일
const TextStyle = styled.div`
    font-size : 20px;
    display :flex;
    justify-content : center;
`;

// 설정(운동종류, 목표시간) 감싸는 부분
const SettingContainer = styled.div`
    display : flex;
    flex-direction : column;
    padding : 5vh 0vh 5vh 0vh;
    gap : 1vh;
`;

// 운동 종류 선택 관련 라디오 스타일
// 목표 시간 선택 관련 number 스타일
const InputStyle = styled.div`
    display : flex;
    justify-content : center;
`;





const Setting1 = () =>{
    return (
        <QuestionContainer>
            <SettingContainer>
                <TextStyle>
                    {text[0]}
                </TextStyle>
                <InputStyle>
                    <input type="radio"/>근력운동
                    <input type="radio"/>유산소
                </InputStyle>
            </SettingContainer>        
            <SettingContainer>
                <TextStyle>
                    {text[1]}
                </TextStyle>
                <InputStyle>
                    <input type="number"/>시
                    <input type="number"/>분
                    <input type="number"/>초
                </InputStyle>
            </SettingContainer>
            
        </QuestionContainer>
    
    );
}

const backButton = "이전";
const nextButton = "다음";
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


const ReuseButton = () =>{
    
    return (
        <ReuseButtonWrapper>
            <ReuseButtonContainer>
                <StyledLink to="/">
                    {backButton}
                </StyledLink>
            </ReuseButtonContainer>
            <ReuseButtonContainer>
                <StyledLink to="/EditGoal2">
                    {nextButton}
                </StyledLink>
            </ReuseButtonContainer>
        </ReuseButtonWrapper>
        
    )
    
}

function EditGoal(){
    return (<div>
        <EGHeader/>
        <Setting1/>
        <ReuseButton/>
    </div>);
}

export default EditGoal;