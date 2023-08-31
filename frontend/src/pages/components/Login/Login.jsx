import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "./LoginStyle.js";
import axios from "axios";

export default function Login() {
  const [id, setID] = useState("");
  const [pw, setPw] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

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

  const handleLogin = () => {
    // 서버로 보낼 데이터
    const userData = {
      id: id,
      pw: pw,
    };

    // axios를 사용하여 서버에 POST 요청 전송
    axios
      .post("/login", userData) // /api/login은 백엔드의 로그인 엔드포인트 주소입니다.
      .then((response) => {
        // 서버 응답 처리
        console.log("로그인 성공!");
        console.log(response.data);
        navigate(response.data);
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
      });
  };

  const handleLoginAndNavigate = () => {
    handleLogin(); // 먼저 로그인 처리 함수 호출
  };

  return (
    <L.Page>
      <L.TitleDiv>
        <L.HealthPumTa>헬</L.HealthPumTa>스를
        <L.HealthPumTa> 품</L.HealthPumTa>은<L.HealthPumTa> 타</L.HealthPumTa>
        이머
      </L.TitleDiv>

      <L.ContentDiv>
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

        <L.InputPassword>PASSWORD</L.InputPassword>
        <L.InputWrap>
          <L.Input
            type="password"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          ></L.Input>
        </L.InputWrap>
      </L.ContentDiv>

      <L.ButtonContainer>
        <L.LoginButton disabled={notAllow} onClick={handleLoginAndNavigate}>
          로그인
        </L.LoginButton>
      </L.ButtonContainer>
    </L.Page>
  );
}
