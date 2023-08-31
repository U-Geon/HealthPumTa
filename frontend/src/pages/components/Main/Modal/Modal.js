import styled from "styled-components";
import { Link } from 'react-router-dom';


export const ModalDiv = styled.div`
    width: 300px;
    height: 200px;
    z-index: 999;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:white;
    border: 1px solid #4E4FEB;
    border-radius: 8px;

`
export const ModalTitle = styled.div`
    text-align: center;
    margin-top: 10%;
`
export const ModalButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
export const ModalButton = styled.button`
    width: 30%;
    height: 50px;
    margin: auto;
    display: block;
    font-weight: 600;
    background-color: #4E4FEB;
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer; 
`
