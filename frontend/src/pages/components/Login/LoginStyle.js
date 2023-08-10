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
    justify-content: center;
`;

export const TitleWrap = styled.div`
    margin-top: 100px;
    font-size: 26px;
    color: #4E4FEB; 
    text-align: center;
`;
export const HealthPumTa = styled.span`
    font-size: 40px;
`;

export const ContentWrap = styled.div`
    margin-top: 60px;
    flex: 1;
    width: 80%;
    align-self: center;
`;

export const InputWrap = styled.div`
    margin: auto;
    display: block;    
    border-radius: 10px;
    padding:16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #4E4FEB;
    width: 80%;
`;

export const InputId = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: #4E4FEB;
    
`;

export const InputTitle = styled.div`
    margin-top: 26px;
    font-size: 20px;
    font-weight: 400;
    color: #4E4FEB;
`;

export const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    height: 30px;
    font-size: 14px;
    font-weight: 300;
    background-color: white;
    color: black;
    &::placeholder{
        color:rgb(212, 212, 212);
    }
`;



export const LoginBottom = styled.div`
    margin-bottom: 30%;
`;

export const BottomButton = styled.button`
    width: 50%;
    height: 50px;
    margin: auto;
    display: block;
    font-weight: 600;
    background-color: #4E4FEB;
    border-radius: 10px;
    color: white;
    cursor: pointer; 
    &:disabled{
        background-color:white;
        color: #4E4FEB;
        border-color: #4E4FEB;
    }
`
