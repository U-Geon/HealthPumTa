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

export const TitleDiv= styled.div`
    margin-top: 15%;
    font-size: 26px;
    color: #4E4FEB; 
    text-align: center;
`;
export const HealthPumTa = styled.span`
    font-size: 40px;
`;

export const ContentDiv = styled.div`
    margin-top: 60px;
    height: 500px;
    width: 500px;
    align-self: center;  
`;

export const InputId = styled.div`
    font-size: 20px;
    margin: 0 23px;
    font-weight: 400;
    color: #4E4FEB;
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

export const InputPassword = styled.div`
    margin: 26px 0 0 23px;
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
    }
`;

export const LoginButton = styled.button`
    width: 50%;
    height: 50px;
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
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 120%;
`;