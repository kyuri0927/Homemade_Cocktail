import React from "react";
import * as Styled from "./styled";
import Data from "../Data";
import img1 from "../../image/cocktail1.png";
import img2 from "../../image/cocktail2.png";
import img3 from "../../image/cocktail3.png";
import img5 from "../../image/cocktail5.png";
import img6 from "../../image/cocktail6.png";
import Cocktail from "../Cocktail";

function Card() {
  //   const card = Data.map((a, i) => {
  //     <div>
  //       <h4>{a}</h4>
  //     </div>;
  //   });
  const image_array = [img1, img2, img3, img5, img6];

  return (
    <>
      {image_array.map(function (a, i) {
        return (
          <div>
            <Styled.Box>
              <img
                src={a}
                style={{
                  width: "130px",
                  height: " 130px",
                  display: "relaitve",
                  marginTop: "15px",
                  marginLeft: "10px",
                  margin: "inline",
                  float: "left",
                }}
              />
              <Styled.FontWrapper>
                <p>술이름</p>
                <p>평점</p>
              </Styled.FontWrapper>
            </Styled.Box>
          </div>
        );
      })}
    </>
  );
}

export default Card;
