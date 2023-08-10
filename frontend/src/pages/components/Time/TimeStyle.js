import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Page = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color:white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const Information = styled.div`
    margin-top: 50px;
    margin-left:30px;
    font-size: 20px;
`;
export const Timer = styled.div`
    font-size: 500%;
    text-align: center;
    color: black;
    margin-top: 60px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;

`
export const Action = styled.button`
    width: 20%;
    height: 50px;
    font-weight: 400;
    background-color: #4E4FEB;
    border: none;
    border-radius: 10px;
    color: white;
    margin-left: 20px;
    cursor: pointer;
`
export const Action1 = styled.button`
    width: 20%;
    height: 50px;
    font-weight: 400;
    background-color: #4E4FEB;
    border: none;
    border-radius: 10px;
    color: white;
    margin-left: 20px;
    cursor: pointer; 
    margin-top: 100px;
`
export const Action2 = styled.button`
    width: 20%;
    height: 50px;
    font-weight: 400;
    background-color:gray;
    border: none;
    border-radius: 10px;
    color: white;
    margin-left: 20px;
    cursor: pointer; 
    margin-top: 100px;
`

