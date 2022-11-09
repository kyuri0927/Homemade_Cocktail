import React from "react";
import * as Styled from "./styled";
import ColorSchemesExample from "../../components/Nav";
import Rating from "../../components/Star";
import TodoTemplate from "../../components/Templete";
import Card from "../../components/Card";
import ColorSchemesExample2 from "../../components/Nav2";
import { useState } from "react";
function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <TodoTemplate>
        {/* 로그인 되어있으면 내정보nav가 뜨고 아니면 로그인 회원가입nav가 뜸 */}
        {isLoggedIn ? <ColorSchemesExample2 /> : <ColorSchemesExample />}

        <Card></Card>
      </TodoTemplate>
    </>
  );
}

export default Home;
