import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderTextStyle = styled.div`
  color: black;
  text-align: left;
  margin-bottom: 5px;
  margin-top: 35%;
`;

export const FormStyle = styled.form`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextStlye = styled.div`
  color: #4e4feb;
  font-size: 14px;
  text-align: left;
  align-items: left;
`;

export const SignTextStyle = styled.div`
  font-size: 14px;
  color: #4e4feb;
  text-align: center;
`;

export const SignInputStyle = styled.input`
  background-color: #d9d9d9;
  color: black;
  width: 145px;
  height: 43px;
  border: none;
  margin: 6px;
  text-align: center;
  font-size: 12px;
  outline: none;
`;

export const SignupStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const LineStyle = styled.div`
  width: 295px;
  height: 1px;
  background-color: #d9d9d9;
  margin-top: 15px;
`;

export const ButtonStyle = styled.button`
  backgroundcolor: #d9d9d9;
  color: black;
  font-size: 6px;
  width: 46px;
  height: 44.5px;
  border: none;
  cursor:pointer;
`;

export const InfoInputStyle = styled.input`
  background-color: #d9d9d9;
  color: black;
  width: 215px;
  height: 43px;
  margin: 6px;
  border: none;
  text-align: center;
  outline: none;
`;

export const InfoTextStyle = styled.div`
  font-size: 20px;
  margin-top:7px;
  margin- bottom : 7px;
  text-align : left;

`;

export const InformationStyle = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MaleStyle = styled.div`
  background-color: #89b1ff;
  color: balck;
  width: 80px;
  height: 43px;
  border-radius: 50px;
  text-align: center;
  display: flex; /* Flexbox 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

export const FemaleStyle = styled.div`
  background-color: #ffa4a4;
  color: balck;
  width: 80px;
  height: 43px;
  border-radius: 50px;
  text-align: center;
  display: flex; /* Flexbox 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

export const Backbtn = styled.button`
  width: 100px;
  height: 62px;
  color: #ffffff;
  font-size: 20px;
  background-color: #4e4feb;
  border-radius: 15px;
  border: none;
  margin-right: 8px;
  cursor: pointer;
`;

export const Completebtn = styled.button`
  width: 170px;
  height: 62px;
  color: #ffffff;
  font-size: 20px;
  background-color: #4e4feb;
  border: none;
  border-radius: 15px;
  margin-left: 15px;
`;

export const ButtonWrapper = styled.div`
    display : flex;
    flex-direction : row;
    gap : 1vh;
    justify-content : center;
    margin-top: 20% ;
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
