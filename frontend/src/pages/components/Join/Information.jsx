import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Backbtn,
  Completebtn,
  FemaleStyle,
  InfoInputStyle,
  InfoTextStyle,
  MaleStyle,
  TextStlye,
} from "../Join/JoinStyle.js";
const Information = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 회원정보를 서버로 전송하는 로직을 추가하기.
    console.log("회원정보:", { height, weight, age, gender });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <InfoTextStyle>신체정보기입</InfoTextStyle>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextStlye>키(cm)</TextStlye>
          <div>
            <InfoInputStyle
              type="text"
              value={height}
              onChange={handleHeightChange}
              placeholder="숫자만 입력해주세요"
              style={{ marginLeft: "35px" }}
            />
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextStlye>몸무게(kg)</TextStlye>
          <div>
            <InfoInputStyle
              type="text"
              value={weight}
              onChange={handleWeightChange}
              placeholder="숫자만 입력해주세요"
              style={{ marginLeft: "13px" }}
            />
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextStlye>나이</TextStlye>
          <div>
            <InfoInputStyle
              type="text"
              value={age}
              onChange={handleAgeChange}
              placeholder="숫자만 입력해주세요"
              style={{ marginLeft: "51px", marginBottom: "15px            " }}
            />
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextStlye>성별</TextStlye>
          <div style={{ display: "flex", marginBottom: "15px" }}>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
              style={{ marginLeft: "50px" }}
            />
            <MaleStyle>남성</MaleStyle>
          </div>
          <div style={{ display: "flex", marginBottom: "15px" }}>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
              style={{ marginLeft: "30px" }}
            />
            <FemaleStyle>여성</FemaleStyle>
          </div>
        </div>
      </div>
      <form></form>
      <div>
        <Link to="/EditProfile">
          <Backbtn>이전</Backbtn>
        </Link>
        <Completebtn type="submit">가입 완료</Completebtn>
      </div>
    </form>
  );
};

export default Information;
