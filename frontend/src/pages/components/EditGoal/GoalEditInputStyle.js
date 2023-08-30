import styled from "styled-components";


export const QuestionContainer = styled.div`
    display : flex;
    flex-direction : column;
    margin : 1vh 0vh 0vh 0vh;
    width : 100%;
    gap : 1vh;
    justify-content : center;
`;


// 텍스트 스타일
export const TextStyle = styled.div`
    font-size : 20px;
    display :flex;
    justify-content : center;
`;

// 설정(운동종류, 목표시간) 감싸는 부분
export const SettingContainer = styled.div`
    display : flex;
    flex-direction : column;
    padding : 5vh 0vh 5vh 0vh;
    gap : 1vh;
    align-items : center;
`;

// 운동 종류 선택 관련 라디오 스타일
// 목표 시간 선택 관련 number 스타일
export const InputStyle = styled.div`
    display : flex;
    justify-content : center;
    width : 80%;
    align-items : center;
    gap : 1vh;
`;

export const Warning = styled.div`
    display : flex;
    justify-content : center;
    color : red;
    padding : 5vh 0vh 0vh 0vh;
`;