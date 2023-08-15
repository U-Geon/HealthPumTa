import React, { useEffect, useState, useRef } from "react";
import ModalBasic from './Modal/Modal.jsx';
import * as T from "./MainStyle.js";

export default function Main() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const timer = useRef();

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [running]);

    const showModal = () => {
      setModalOpen(true);
    };

    const format = (time) => {
      let hours = Math.floor((time / 60 / 60) % 24);
      let minutes = Math.floor((time / 60) % 60);
      let seconds = Math.floor(time % 60);
    
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
    
      return hours + ":" + minutes + ":" + seconds;
    };
    

  return (
    <T.Page>
      <T.Wrapper>
        <T.NickNameText>000님</T.NickNameText>
        <T.MainText>오늘도 힘차게 시작해볼까요?</T.MainText>
      </T.Wrapper>

      <T.Timer>{format(time)}</T.Timer>

      <T.ButtonDiv>
        <T.Action onClick={() => setTime(0)}>초기화</T.Action>
        <T.Action
          onClick={() => {
            if (running) clearInterval(timer.current);
            setRunning(!running);
          }}
        >
          {running ? "일시정지" : "시작"}
        </T.Action>
      </T.ButtonDiv>
      
      <T.ButtonDiv>
        <T.Action onClick={showModal} >운동 끝</T.Action> 
          {modalOpen && <ModalBasic setModalOpen = {setModalOpen} time={time}/>}  
      </T.ButtonDiv> 

      <T.ButtonWrapper>
        <T.ButtonRow>목표</T.ButtonRow>
        <T.ButtonRow color = '#4E4FEB'>타이머</T.ButtonRow>
        <T.ButtonRow>
          <T.CustomLink to="/MyPage">내정보</T.CustomLink>  
        </T.ButtonRow>
      </T.ButtonWrapper>
    </T.Page>
  );
}

