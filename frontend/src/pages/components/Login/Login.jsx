import React, { useEffect, useState } from "react";
import * as L from "./LoginStyle.js";

export default function Login() {
  const [id, setID] = useState("");
  const [pw, setPw] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleId = (e) => {
    setID(e.target.value);
    const regex = /^[a-zA-Z0-9]+$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^.+$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  return (
    <L.Page>
      <L.TitleWrap>
        <L.HealthPumTa>헬</L.HealthPumTa>스를
        <L.HealthPumTa> 품</L.HealthPumTa>은<L.HealthPumTa> 타</L.HealthPumTa>
        이머
      </L.TitleWrap>

      <L.ContentWrap>
        <L.InputId>ID</L.InputId>

        <L.InputWrap>
          <L.Input
            type="text"
            className="input"
            placeholder="올바른 아이디를 입력해주세요  (한글 x)"
            value={id}
            onChange={handleId}
          ></L.Input>
        </L.InputWrap>

        <L.InputTitle>PASSWORD</L.InputTitle>
        <L.InputWrap>
          <L.Input
            type="password"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          ></L.Input>
        </L.InputWrap>
      </L.ContentWrap>

      <L.LoginBottom>
        <L.BottomButton disabled={notAllow}>로그인</L.BottomButton>
      </L.LoginBottom>
    </L.Page>
  );
}
