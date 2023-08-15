import React, { useState } from "react";
import {
  ButtonStyle,
  LineStyle,
  SignInputStyle,
  SignTextStyle,
  SignupStyle,
  HeaderTextStyle,
} from "../Join/JoinStyle";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isUsernameDuplicate, setIsUsernameDuplicate] = useState(false);
  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleCheckUsernameDuplication = () => {
    // 아이디 중복 확인  (실제 서버 요청과 대체해야 함)
    const isDuplicate = false; // 실제 서버에서 받은 결과로 대체
    setIsUsernameDuplicate(isDuplicate);
  };

  const handleCheckNicknameDuplication = () => {
    // 닉네임 중복 확인 (실제 서버 요청과 대체해야 함)
    const isDuplicate = false; // 실제 서버에서 받은 결과로 대체
    setIsNicknameDuplicate(isDuplicate);
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 회원 가입 로직을 추가하기.
    // 서버에 회원 가입 요청을 보내는 등의 동작?
    console.log("회원 가입 정보:", { username, password, nickname });
  };

  return (
    <form onSubmit={handleSubmit}>
      <HeaderTextStyle>
        <div style={{ fontSize: "27px" }}>회원가입</div>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          새로운 도전을 응원해요!
        </div>
      </HeaderTextStyle>
      <div>
        <SignupStyle>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SignTextStyle style={{ marginRight: "47px" }}>
              아이디
            </SignTextStyle>
            <div>
              <SignInputStyle
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="아이디를 입력해주세요"
              />
            </div>
          </div>
          <div>
            <ButtonStyle
              style={{ marginLeft: "6px" }}
              type="button"
              onClick={handleCheckUsernameDuplication}
            >
              중복<br></br>확인
            </ButtonStyle>
          </div>
        </SignupStyle>
        {isUsernameDuplicate && <p>이미 사용 중인 아이디입니다.</p>}
      </div>
      <div>
        <SignupStyle>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SignTextStyle>비밀번호</SignTextStyle>
            <div>
              <SignInputStyle
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호를 입력해주세요"
                style={{ marginLeft: "40px" }}
              />
            </div>
          </div>
          <div>
            <ButtonStyle
              style={{ marginLeft: "6px" }}
              type="button"
              onClick={handlePasswordVisibilityToggle}
            >
              {isPasswordVisible ? "숨기기" : "보이기"}
            </ButtonStyle>
          </div>
        </SignupStyle>
      </div>
      <div>
        <SignupStyle>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SignTextStyle>닉네임</SignTextStyle>
            <div>
              <SignInputStyle
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
                placeholder="닉네임을 입력해주세요"
                style={{ marginLeft: "52px" }}
              />
            </div>
          </div>
          <div>
            <ButtonStyle
              style={{ marginLeft: "6px" }}
              type="button"
              onClick={handleCheckNicknameDuplication}
            >
              중복<br></br>확인
            </ButtonStyle>
          </div>
        </SignupStyle>

        <LineStyle></LineStyle>

        {isNicknameDuplicate && <p>이미 사용 중인 닉네임입니다.</p>}
      </div>
    </form>
  );
};

export default Signup;
