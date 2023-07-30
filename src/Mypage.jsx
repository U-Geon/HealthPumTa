import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import SGHeader from "./SetGoal.jsx";

const Header = () =>{
    // 닉네임 포함 맨 위에 들어가는 문구
    const NickName = "OOO";
    const Text = "님,";
    const Text2 = "오늘도 힘차게 시작해 볼까요?";
    // 전체 감싸는 wrapper
    const wrapper = {
        display : 'flex',
        flexDirection : 'column',
        margin : '5vh 0vh 0vh 0vh',
        width : '100%',
        gap : '1vh',
        justifyContent : 'center',
        textAlign : 'center'
    }
    // 닉네임과, 문구 css
    const nickNameText = {
        fontSize : '30px',
        width : '20vh',
    }
    const mainText ={
        fontSize : '25px',
        padding : '0vh 0vh 2vh 0vh',
        width : '45vh',
    }
    // 버튼 텍스트
    const IndividualGoalButton = "목표 보기(개인)";
    const GroupGoalButton = "목표 보기(그룹)";
    const GroupButton = "그룹 보러 가기";
    const StartButton = "시작하기";
    // 버튼 감싸는 부분
    const buttonWrapper = {
        display : 'flex',
        flexDirection : 'row',
        gap : '1vh',
        justifyContent : 'center'
    }
    // 3개짜리 버튼 스타일
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
    // 시작하기 버튼 스타일
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
    return (
        <div style={wrapper}>
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
    )
}

const Goal = () => {
    // 전체 감싸는 부분
    const wrapper = {
        display : 'flex',
        flexDirection : 'column',
        margin : '5vh 0vh 0vh 0vh',
        width : '100%',
        gap : '1vh',
        justifyContent : 'center',
        textAlign : 'center'
    }
    // 목표 텍스트
    const todayGoalText = "오늘의 목표";
    const weight = "(근력 운동)";
    const cardio = "(유산소)";
    const editGoalButton = "목표 수정/추가하기";
    // 목표 박스 감싸는 부분
    const goalContainer = {
        display : 'flex',
        flexDirection : 'column',
        padding : '5vh 0vh 5vh 0vh',
        gap : '1vh',
        justifyContent : 'center',
        alignItems : 'center'

    }
    // 목표 텍스트 스타일
    const goalMainText = {
        fontSize : '20px'
    }
    const goalBoxText = {
        color : 'white',
        backgroundColor : '#4E4FEB',
        width : '38vh',
        borderRadius : '10px',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        textAlign : 'center'
        
    }
    // 목표 체크리스트
    const goal = {
        display : 'inline-block',
        flexDirection : 'column',
        textAlign : 'center',
    }
    // 목표 수정 버튼 스타일
    const editGoalButtonText = {
        color : '#068FFF',
        fontSize : '20px',
        display : 'flex',
        justifyContent : 'center',
        textDecoration : 'none'
    }
    // 목표 체크리스트 관련 변수
    const disabled = false;
    const checked = false;
    return (
        <div style={wrapper}>
            <div style={goalContainer}>
                <div style={goalMainText}>
                    {todayGoalText}{weight}
                </div>
                <div style={goalBoxText}>
                    <label style={goal}>
                        <input type="checkbox"
                        value='체크리스트1'
                        disabled = {disabled}
                        checked = {checked}
                        // onChange={({ target: { checked } }) => onChange(checked)}
                        />체크리스트1
                    </label>
                    <label style={goal}>
                        <input type="checkbox"
                        value='체크리스트2'
                        disabled = {disabled}
                        checked = {checked}
                        // onChange={({ target: { checked } }) => onChange(checked)}
                        />체크리스트2
                    </label>
                    <label style={goal}>
                        <input type="checkbox"
                        value='체크리스트3'
                        disabled = {disabled}
                        checked = {checked}
                        // onChange={({ target: { checked } }) => onChange(checked)}
                        />체크리스트3
                    </label>    
                    <label style={goal}>
                        <input type="checkbox"
                        value='체크리스트4'
                        disabled = {disabled}
                        checked = {checked}
                        // onChange={({ target: { checked } }) => onChange(checked)}
                        />체크리스트4
                    </label>
                </div>
            </div>
            <div style={goalContainer}>
                <div style={goalMainText}>
                    {todayGoalText}{cardio}
                </div>
                <div style={goalBoxText}>
                    <label style={goal}>
                        <input type="checkbox"
                        value='체크리스트1'
                        disabled = {disabled}
                        checked = {checked}
                        
                        // onChange={({ target: { checked } }) => onChange(checked)}
                        />체크리스트1
                        <input type="checkbox"
                        value='체크리스트2'
                        disabled = {disabled}
                        checked = {checked}
                        // onChange={({ target: { checked } }) => onChange(checked)}
                        />체크리스트2
                        <input type="checkbox"
                        value='체크리스트3'
                        disabled = {disabled}
                        checked = {checked}
                        // onChange={({ target: { checked } }) => onChange(checked)}
                        />체크리스트3
                        <input type="checkbox"
                        value='체크리스트4'
                        disabled = {disabled}
                        checked = {checked}
                        // onChange={({ target: { checked } }) => onChange(checked)}
                        />체크리스트4
                    </label>
                </div>
            </div>
        <div>
            <Link to = "/SetGoal" style={editGoalButtonText}>{editGoalButton}</Link>    
        </div>
    </div>)
        
}

function Mypage(){
    return <div><Header/><Goal/></div>;
}

export default Mypage;
