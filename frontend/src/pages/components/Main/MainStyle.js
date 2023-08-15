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
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;


export const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    margin : 5vh 0vh 0vh 0vh;
    width : 100%;
    gap : 1vh;
    justify-content : center;
`;

export const NickNameText = styled.div`
    font-size : 30px;
    display : flex;
    justify-content :center;
`;

export const MainText = styled.div`
    font-size : 25px;
    padding : 0vh 0vh 2vh 0vh;
    display : flex;
    justify-content : center;
`;

export const Timer = styled.div`
    font-size: 500%;
    text-align: center;
    color: black;
    margin-top: 60px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap : 3vh;
`
export const Action = styled.button`
    width: 20%;
    height: 50px;
    font-weight: 400;
    background-color: #4E4FEB;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
`

export const ButtonWrapper = styled.div`
    display : flex;
    flex-direction : row;
    gap : 1vh;
    justify-content : center;
    margin-top: 34% ;
`;

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
    margin-bottom :5vh;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    color : white;
`;
