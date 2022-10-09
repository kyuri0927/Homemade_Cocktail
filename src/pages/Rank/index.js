import React from "react";
import * as Styled from "./styled";
import Rating from "../../components/Star";

function Rank() {
  return (
    <>
      <div>
        <p> Ranking </p>
        <div>
          <Rating></Rating>
          <Rating></Rating>
          <Rating></Rating>
          <Rating></Rating>
          <Rating></Rating>
        </div>
      </div>
    </>
  );
}

export default Rank;
