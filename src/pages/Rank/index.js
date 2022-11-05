import React from "react";
import * as Styled from "./styled";
import Rating from "../../components/Star";
import Card from "../../components/Card";
import ColorSchemesExample from "../../components/Nav";
import Cocktail from "../../components/Cocktail";

import img1 from "../../image/cocktail1.png";
import img2 from "../../image/cocktail2.png";
import img3 from "../../image/cocktail3.png";
import img5 from "../../image/cocktail5.png";
import img6 from "../../image/cocktail6.png";

function Rank() {
  const image_array = [img1, img2, img3, img5, img6];

  return (
    <>
      <div>
        <p> Ranking </p>
        <ColorSchemesExample></ColorSchemesExample>
        {[1, 2, 3, 4, 5].map(function (a, i) {
          return (
            <div>
              <Styled.Box>
                <img
                  src={image_array[i]}
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
