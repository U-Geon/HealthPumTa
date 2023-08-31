import React from "react";
import logo from "./image/gym.png";
import * as M from "./LogoStyle.js";

export default function Logo() {
  return (
    <M.Page>
      <M.LogoDiv>
        <M.Logo src={logo} alt="로고이미지"></M.Logo>
      </M.LogoDiv>

      <M.TitleDiv>
        <M.HealthPumTa>헬</M.HealthPumTa>스를
        <M.HealthPumTa> 품</M.HealthPumTa>은<M.HealthPumTa> 타</M.HealthPumTa>
        이머
      </M.TitleDiv>

      <M.LoginDiv1>
        <M.CustomLink to="./Login">
          <M.LoginButton> 로그인 </M.LoginButton>
        </M.CustomLink>
      </M.LoginDiv1>

      <M.LoginDiv2>
        <span>계정이 없으신가요?</span>
        <M.CustomLink to="./Join">
          <M.NewPerson> 가입하기</M.NewPerson>
        </M.CustomLink>
      </M.LoginDiv2>
    </M.Page>
  );
}
