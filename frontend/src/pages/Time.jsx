import React, { useEffect, useState, useRef } from 'react'
import * as T from "./components/TimeStyle.js";


export default function Time() {

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    const timer = useRef()

    useEffect(() => {
        if (running){
            timer.current = setInterval(() => {
                setTime(pre => pre + 1)
            },1000)   
        }
        return () => clearInterval(timer.current)
    },[running])
    
    

    return (
        <T.Page>
            <T.Information>
                <div>000님</div>
                <div>오늘도 힘차게 시작해볼까요?</div>
            </T.Information>
            
            <T.Timer>{format(time)}</T.Timer>

            <T.Actions>
                <T.Action onClick={() => setTime(0)}>초기화</T.Action>
                <T.Action onClick={() => {
                    if(running)clearInterval(timer.current)
                    setRunning(!running)
                }}>
                    {running ? '일시정지' : '시작'}
                    </T.Action>
            </T.Actions>

            <T.Actions>
                <T.Action2>목표</T.Action2>
                <T.Action1>타이머</T.Action1>
                <T.Action2>내정보</T.Action2>
            </T.Actions>
        </T.Page>
    )
}

const format = (time) => {
    let hours = Math.floor(time / 60 / 60%24)
    let minutes = Math.floor(time / 60 % 60)
    let seconds = Math.floor(time % 60)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return hours + ":" + minutes + ":" + seconds
}

