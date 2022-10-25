import React from "react";
import * as Styled from "./styled";
import Data from "../Data";

function Card() {
  //   const card = Data.map((a, i) => {
  //     <div>
  //       <h4>{a}</h4>
  //     </div>;
  //   });

  return (
    <>
      {[1, 2, 3, 4, 5, 6].map(function () {
        return (
          <div>
            <Styled.Box>
              <p>술사진</p>
              <p>술이름</p>
              <p>평점</p>
            </Styled.Box>
          </div>
        );
      })}
    </>
  );
}

export default Card;
