import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import SGHeader from "./SetGoal.jsx";
import styled from "styled-components";


const StyledLink = styled(Link)`
    color : #FFFFFF;
    font-size : 20px;
    display : flex;
    justify-content : center;
    text-decoration : none;
`;

const ColorStyledLink = styled(Link)`
    color : #068FFF;
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

const GoalContainer = styled.div`
    display : flex;
    flex-direction : column;
    padding : 1vh 0vh 5vh 0vh;
    gap : 1vh;
    justify-content : center;
    align-items : center;
`;

const GoalMainText = styled.div`
    font-size : 20px;
`;

const GoalBoxText = styled.div`
    color : white;
    background-color : #4E4FEB;
    width : 38vh;
    border-radius : 10px;
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    gap : 10px;
`;

const LabelStyle = styled.div`
    margin : 1vh 1vh 1vh 1vh;
`;
// 목표 체크리스트
const GoalCheckList = styled.div`
    display : inline-block;
    flex-direction : column;
    text-align : center;
    
`;

// 목표 수정 버튼 스타일
const EditGoalButtonText = styled.div`
    
`;

// 목표 체크리스트 관련 변수
const NickName = "OOO";
const Text = "님,";
const Text2 = "오늘도 힘차게 시작해 볼까요?";
const IndividualGoalButton = "목표 보기(개인)";
const GroupGoalButton = "목표 보기(그룹)";
const GroupButton = "그룹 보러 가기";
const StartButton = "시작하기";
const SettingButton = "설정";
const todayGoalText = "오늘의 목표";
const weight = "(근력 운동)";
const cardio = "(유산소)";
const editGoalButton = "목표 수정/추가하기";
    


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

const Goal=()=>{
    return(
        <Wrapper>
            <GoalContainer>
                <GoalMainText>
                    {todayGoalText}{weight}
                </GoalMainText>
                <GoalBoxText>
                    <GoalCheckList>
                        <LabelStyle>
                            <input type="checkbox"/>체크리스트1
                        </LabelStyle>
                    </GoalCheckList>
                    <GoalCheckList>
                        <LabelStyle>
                            <input type="checkbox"/>체크리스트2
                        </LabelStyle>
                    </GoalCheckList><GoalCheckList>
                        <LabelStyle>
                            <input type="checkbox"/>체크리스트3
                        </LabelStyle>
                    </GoalCheckList><GoalCheckList>
                        <LabelStyle>
                            <input type="checkbox"/>체크리스트4
                        </LabelStyle>
                    </GoalCheckList>
                </GoalBoxText>
            </GoalContainer>
            <GoalContainer>
                <GoalMainText>
                    {todayGoalText}{cardio}
                </GoalMainText>
                <GoalBoxText>
                <GoalCheckList>
                        <LabelStyle>
                            <input type="checkbox"/>체크리스트1
                        </LabelStyle>
                    </GoalCheckList><GoalCheckList>
                        <LabelStyle>
                            <input type="checkbox"/>체크리스트2
                        </LabelStyle>
                    </GoalCheckList><GoalCheckList>
                        <LabelStyle>
                            <input type="checkbox"/>체크리스트3
                        </LabelStyle>
                    </GoalCheckList><GoalCheckList>
                        <LabelStyle>
                            <input type="checkbox"/>체크리스트4
                        </LabelStyle>
                    </GoalCheckList>
                </GoalBoxText>
            </GoalContainer>
        </Wrapper>

    );
};

// 임시코드
const editGoalButton2 = "목표수정 임시페이지";
const EditButton2=()=>{
    return(
        <ColorStyledLink to="./EditGoal">
            {editGoalButton2}
        </ColorStyledLink>
    )
}
// 임시코드

const EditButton=()=>{
    return(
        <ColorStyledLink to="./SetGoal">
            {editGoalButton}
        </ColorStyledLink>
    )
}
function Mypage () {
    return(
        <div>
            <Header/>
            <Goal/>
            <EditButton/>
            <EditButton2/>
        </div>
    );
    
}


export default Mypage;




             