import React from "react";
import logo from "./image/gym.png";
import * as M from "./MainStyle.js";

export default function Main() {
  return (
    <M.Page>
      <M.LogoD>
        <M.Logo src={logo} alt="로고이미지"></M.Logo>
      </M.LogoD>

      <M.Title>
        <M.HealthPumTa>헬</M.HealthPumTa>스를
        <M.HealthPumTa> 품</M.HealthPumTa>은<M.HealthPumTa> 타</M.HealthPumTa>
        이머
      </M.Title>

      <M.Login>
        <M.CustomLink to="./Login" className="Link">
          <M.LoginButton> 로그인 </M.LoginButton>
        </M.CustomLink>
      </M.Login>

      <M.New>
        <span>계정이 없으신가요?</span>
        <M.CustomLink to="./Time" className="Link">
          <M.NewPerson> 가입하기</M.NewPerson>
        </M.CustomLink>
      </M.New>
    </M.Page>
  );
}
