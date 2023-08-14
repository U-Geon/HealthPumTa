import styled from "styled-components";


export const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    margin : 5vh 0vh 0vh 0vh;
    width : 100%;
    gap : 1vh;
    justify-content : center;
    text-align : center;
`;

export const GoalContainer = styled.div`
    display : flex;
    flex-direction : column;
    padding : 1vh 0vh 5vh 0vh;
    gap : 1vh;
    justify-content : center;
    align-items : center;
`;

export const GoalMainText = styled.div`
    font-size : 20px;
`;

export const GoalBoxText = styled.div`
    color : white;
    background-color : #4E4FEB;
    width : 38vh;
    border-radius : 10px;
    display : flex;
    gap : 10px;
`;

// 목표 체크리스트
export const GoalCheckList = styled.div`
    margin : 1vh 1vh 1vh 1vh;
    display : flex;
    text-align : center;
    align-items : center;
    justify-content : center;
    width : 50%;
`;