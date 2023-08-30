import styled from "styled-components";
import {BrowserRouter, Link} from 'react-router-dom';

export const LStyledLink = styled(Link)`
    color : #FFFFFF;
    font-size : 20px;
    display : flex;
    justify-content : center;
    text-decoration : none;
`;

export const RStyledLink = styled(Link)`
    color : #FFFFFF;
    font-size : 20px;
    display : flex;
    justify-content : center;
    text-decoration : none;
`;

export const ReuseButtonContainer = styled.div`
    background-color : #4E4FEB;
    color : white;
    width : 18vh;
    font-size : 20px;
    border-radius : 10px;
    height : 6vh;
    display : flex;
    align-items : center;
    text-align : center;
    justify-content : center;
    margin-bottom : 5vh;
`;
export const ReuseButtonWrapper = styled.div`
    display : flex;
    flex-direction : row;
    gap : 1vh;
    justify-content : center;
`;
