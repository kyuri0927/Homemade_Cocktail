import React from "react";
import * as Styled from "./styled";
import ColorSchemesExample from "../../components/Nav";
import Rating from "../../components/Star";
import TodoTemplate from "../../components/Templete";
import Card from "../../components/Card";
function Home() {
  return (
    <>
      <TodoTemplate>
        <ColorSchemesExample></ColorSchemesExample>
        <Card></Card>
      </TodoTemplate>
    </>
  );
}

export default Home;
