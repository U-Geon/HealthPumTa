import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ButtonStyle,
  InfoInputStyle,
  SignInputStyle,
  TextStlye,
  MaleStyle,
  FemaleStyle,
  Completebtn,
  LineStyle,
  FormStyle,
} from "../Join/JoinStyle";

const EditProfile = () => {
  // Sample data for demonstration
  const initialUserInfo = {
    username: "kyunhui",
    password: "samplepassword",
    nickname: "유니크",
    height: "",
    weight: "",
    age: "",
    gender: "male",
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const [newPassword, setNewPassword] = useState("");

  const [isNicknameAvailable, setIsNicknameAvailable] = useState(true); // 닉네임 중복여부를 확인하기 위한 상태

  const handlePasswordChange = () => {
    // Implement your password change logic here
    // This function will be called when the "비밀번호 변경" button is clicked
    // You can send a request to your backend API to update the password
    // and handle the response accordingly
    console.log("새 비밀번호:", newPassword);
  };

  const generateWelcomeMessage = () => {
    if (userInfo.nickname) {
      return (
        <div>
          <span style={{ fontWeight: "600" }}>{userInfo.nickname}</span>님,
          <br />
          어떤 정보를 수정하시겠어요?
        </div>
      );
    }
    return "어떤 정보를 수정하시겠어요?";
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 정보 수정 요청을 서버로 보내는 로직을 추가할 수 있습니다.
    console.log("수정된 정보:", userInfo);
  };

  const handleNicknameChange = (event) => {
    const newNickname = event.target.value;
    // 닉네임 중복확인을 위한 로직 구현 (예: 서버에 요청하여 중복 확인)
    // 현재는 간단한 시뮬레이션을 위해 타임아웃을 사용하고 있습니다
    setTimeout(() => {
      setIsNicknameAvailable(newNickname !== "유니크"); // 시뮬레이션입니다. 실제 로직을 사용해야 합니다.
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormStyle>
        <div>
          <div
            style={{ marginTop: "5px", marginBottom: "20px", fontSize: "23px" }}
          >
            {generateWelcomeMessage()}
          </div>{" "}
          {/* 동적으로 환영 메시지를 표시 */}
          <div style={{ fontSize: "20px", marginBottom: "15px" }}>내정보</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextStlye>아이디</TextStlye>
            <InfoInputStyle
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              style={{ marginLeft: "27px" }}
              readOnly
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextStlye>비밀번호</TextStlye>
            <SignInputStyle
              type="password"
              name="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ marginLeft: "15px", width: "150px" }}
            />
            <div>
              <ButtonStyle
                type="button"
                onClick={handlePasswordChange}
                style={{ marginLeft: "10px" }}
              >
                변경
              </ButtonStyle>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextStlye style={{ marginRight: "20px" }}>닉네임</TextStlye>
            <InfoInputStyle
              type="text"
              name="nickname"
              value={userInfo.nickname}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <LineStyle
          style={{
            marginBottom: "7px",
            marginRight: "7px",
            width: "290px",
          }}
        ></LineStyle>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextStlye>키(cm)</TextStlye>
            <InfoInputStyle
              type="text"
              name="height"
              value={userInfo.height}
              onChange={handleInputChange}
              style={{ marginLeft: "29px" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextStlye>몸무게(kg)</TextStlye>
            <InfoInputStyle
              type="text"
              name="weight"
              value={userInfo.weight}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextStlye>나이</TextStlye>
            <InfoInputStyle
              type="text"
              name="age"
              value={userInfo.age}
              onChange={handleInputChange}
              style={{ marginLeft: "45px", marginBottom: "20px" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextStlye>성별</TextStlye>
            <div
              style={{
                display: "flex",
                marginBottom: "15px",
                marginLeft: "35px",
              }}
            >
              <input
                type="radio"
                name="gender"
                value="male"
                checked={userInfo.gender === "male"}
                onChange={handleInputChange}
              />
              <MaleStyle>남성</MaleStyle>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "15px",
                marginLeft: "20px",
              }}
            >
              <input
                type="radio"
                name="gender"
                value="female"
                checked={userInfo.gender === "female"}
                onChange={handleInputChange}
              />
              <FemaleStyle>여성</FemaleStyle>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/">
            <Completebtn
              style={{ width: "295px", marginRight: "12px" }}
              type="submit"
            >
              수정 완료
            </Completebtn>
          </Link>
        </div>
      </FormStyle>
    </form>
  );
};

export default EditProfile;
