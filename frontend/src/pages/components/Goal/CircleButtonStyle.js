import styled from "styled-components";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

export const EditDeleteButtonContainer = styled.div`
    display : flex;
    padding : 0vh 0vh 5vh 0vh;
    justify-content : center;
    gap : 10%;
`;
export const EditDeleteButton = styled(Link)`
    width : 50px;
    height : 50px;
    background-color : #D9D9D9;
    border-radius : 100%;
    text-align : center;
    display : flex;
    justify-content : center;
    align-items : center;
    text-decoration : none;
    color : #000000;
`;