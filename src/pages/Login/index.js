import React from "react";
import * as Styled from "./styled";
import { useState } from "react";

function Login() {
  return (
    <>
      <div>
        <Styled.LogoWrapper>
          <Styled.Logo to="/">Cocktail</Styled.Logo>
        </Styled.LogoWrapper>

        <br />
        <br />

        <p> 아이디</p>
        <Styled.Id placeholder="아이디를 입력해주세요"></Styled.Id>
        <div>
          <p> 비밀번호</p>
          <Styled.Pwd placeholder="비밀번호를 입력해주세요"></Styled.Pwd>
          <Styled.StyledButton>
            <p>로그인</p>
          </Styled.StyledButton>
        </div>
      </div>
    </>
  );
}

export default Login;
