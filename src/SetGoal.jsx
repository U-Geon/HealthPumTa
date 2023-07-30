import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import "./App.jsx"

// SGHeader는 Mypage.jsx의 header 와 동일 구조
const SGHeader = () =>{
    const NickName = "OOO";
    const Text = "님,";
    const Text2 = "어떤 목표를 설정해 볼까요?";
    const wrapper = {
        display : 'flex',
        flexDirection : 'column',
        margin : '5vh 0vh 0vh 0vh',
        width : '100%',
        gap : '1vh',
        justifyContent : 'center',
        textAlign : 'center'
    }
    const nickNameText = {
        fontSize : '30px',
        width : '20vh',
    }
    const mainText ={
        fontSize : '25px',
        padding : '0vh 0vh 2vh 0vh',
        width : '42vh',
    }
    const IndividualGoalButton = "목표 보기(개인)";
    const GroupGoalButton = "목표 보기(그룹)";
    const GroupButton = "그룹 보러가기";
    const StartButton = "시작하기";
    const buttonWrapper = {
        display : 'flex',
        flexDirection : 'row',
        gap : '1vh',
        justifyContent : 'center',
    }
    const buttonRow1 = {
        backgroundColor : '#4E4FEB',
        color : 'white',
        width : '12vh',
        fontSize : '20px',
        borderRadius : '10px',
        height : '7vh',
        display : 'flex',
        alignItems : 'center',
        textAlign : 'center',
        justifyContent : 'center'

    }
    const buttonRow2 = {
        backgroundColor : '#4E4FEB',
        color : 'white',
        width : '38vh',
        fontSize : '20px',
        borderRadius : '10px',
        height : '7vh',
        display : 'flex',
        alignItems : 'center',
        textAlign : 'center',
        justifyContent : 'center'

    }

    return <div style={wrapper}>
        <div style={nickNameText}>
            {NickName}{Text}
        </div>
        <div style={mainText}>
            {Text2}
        </div>
        <div style={buttonWrapper}>
            <div style={buttonRow1}>
                {IndividualGoalButton}
            </div>
            <div style={buttonRow1}>
                {GroupGoalButton}
            </div>
            <div style={buttonRow1}>
                {GroupButton}
            </div>
        </div>
        <div style={buttonWrapper}>
            <div style={buttonRow2}>
                {StartButton}
            </div>
        </div>
    </div>  
}

const Setting1 = () =>{
    const wrapper = {
        display : 'flex',
        flexDirection : 'column',
        margin : '1vh 0vh 0vh 0vh',
        width : '100%',
        gap : '1vh',
        justifyContent : 'center'

    }
    // 텍스트만 적어둔 배열
    const text = ["운동의 종류를 선택해 주세요","목표 시간을 적어 주세요", "세부 목표를 설정해 주세요"];
    // 텍스트 스타일
    const textStyle = {
        fontSize : '20px',
        display :'flex',
        justifyContent : 'center'
    }
    // 설정(운동종류, 목표시간) 감싸는 부분
    const settingContainer = {
        display : 'flex',
        flexDirection : 'column',
        padding : '5vh 0vh 5vh 0vh',
        gap : '1vh'
    }
    // 운동 종류 선택 관련 라디오 스타일
    const radioStyle = {
        display : 'flex',
        justifyContent : 'center'
    }
    // 목표 시간 선택 관련 number 스타일
    const numberStyle = {
        display : 'flex',
        justifyContent : 'center',
    }
    // 시간 스타일
    const labelStyle = {
        width : '5vh'
    }
    const radioDisabled = false;
    const radioChecked = false;
    return <div style={wrapper}>
        <div style={settingContainer}>
            <div style={textStyle}>
                {text[0]}
            </div>
            <div>
                <label style={radioStyle}>
                    <input type="radio"
                    value='유산소'
                    disabled = {radioDisabled}
                    checked = {radioChecked}
                    />유산소
                    <input type="radio"
                    value='근력운동'
                    disabled = {radioDisabled}
                    checked = {radioChecked}
                    />근력운동
                </label>
            </div>
        </div>
        <div style={settingContainer}>
            <div style={textStyle}>
                {text[1]}
            </div>
            <div>
                <label style={numberStyle}>
                    <input type="number"
                    value='goalHour'
                    disabled = {radioDisabled}
                    checked = {radioChecked}
                    style={labelStyle}
                    />시
                    <input type="number"
                    value='goalMinute'
                    disabled = {radioDisabled}
                    checked = {radioChecked}
                    style={labelStyle}
                    />분
                    <input type="number"
                    value='goalSecond'
                    disabled = {radioDisabled}
                    checked = {radioChecked}
                    style={labelStyle}
                    />초
                </label>
            </div>
        </div>

    </div>
}

function SetGoal(){
    return <div><SGHeader/><Setting1/></div>;
}

export default SetGoal;