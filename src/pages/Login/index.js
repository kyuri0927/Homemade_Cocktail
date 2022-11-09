import React from "react";
import * as Styled from "./styled";
import { useState, useCallback } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <>
      <div>
        <Styled.LogoWrapper>
          <Styled.Logo to="/">Cocktail</Styled.Logo>
        </Styled.LogoWrapper>

        <br />
        <br />

        <p> 아이디</p>
        <Styled.Id
          type={id}
          value={id}
          onChange={onChangeId}
          placeholder="아이디를 입력해주세요"
        ></Styled.Id>
        <div>
          <p> 비밀번호</p>
          <Styled.Pwd
            type={password}
            vale={password}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요"
          ></Styled.Pwd>
          <Styled.StyledButton type="primary" htmlTyle="submit" loading={false}>
            <p>로그인</p>
          </Styled.StyledButton>
        </div>
      </div>
    </>
  );
}

export default Login;
