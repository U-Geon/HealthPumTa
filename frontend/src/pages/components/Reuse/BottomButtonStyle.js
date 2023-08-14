import styled from "styled-components";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

export const StyledLink = styled(Link)`
    color : #FFFFFF;
    font-size : 20px;
    display : flex;
    justify-content : center;
    text-decoration : none;
`;

export const ButtonWrapper = styled.div`
    display : flex;
    flex-direction : row;
    gap : 1vh;
    justify-content : center;
`;


// 3개짜리 버튼 스타일
export const ButtonRow = styled.div`
    background-color : ${props => props.color || '#D9D9D9'};
    color : white;
    width : 12vh;
    font-size : 20px;
    border-radius : 10px;
    height : 7vh;
    display : flex;
    align-items : center;
    text-align : center;
    justify-content : center;
    margin-bottom : 5vh;
`;
