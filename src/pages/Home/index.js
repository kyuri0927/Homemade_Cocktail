import React from "react";
import * as Styled from "./styled";
import ColorSchemesExample from "../../components/Nav";
import Rating from "../../components/Star";
import TodoTemplate from "../../components/Templete";
function Home() {
  return (
    <>
      <TodoTemplate>
        <ColorSchemesExample></ColorSchemesExample>
      </TodoTemplate>
    </>
  );
}

export default Home;
