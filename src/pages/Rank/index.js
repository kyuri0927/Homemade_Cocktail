import React from "react";
import * as Styled from "./styled";
import Rating from "../../components/Star";
import Card from "../../components/Card";
import ColorSchemesExample from "../../components/Nav";
function Rank() {
  return (
    <>
      <div>
        <p> Ranking </p>
        <ColorSchemesExample></ColorSchemesExample>
        {[1, 2, 3, 4, 5, 6].map(function () {
          return (
            <div>
              <Styled.Box>
                <Rating></Rating>
              </Styled.Box>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Rank;
