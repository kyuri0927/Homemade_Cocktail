import React from "react";
import * as Styled from "./styled";
import ColorSchemesExample from "../../components/Nav";
import Rating from "../../components/Star";
import TodoTemplate from "../../components/Templete";

function Explain() {
  return (
    <div>
      <TodoTemplate>
        <ColorSchemesExample></ColorSchemesExample>
        {/* 사진  */}
        <div className="Card1">
          <div className="c1image">
            <img
              className="phoneImage"
              alt="iPhone_01"
              src="img/cocktail1.png"
            />
          </div>
        </div>
        {/* 사진 */}

        <Styled.RatingText>선호도를 입력해주세요.</Styled.RatingText>

        {/* 별점 컴포넌트 */}
        <Rating></Rating>
        {/* 별점 컴포넌트 */}

        <Styled.FontWraper>
          <p> 아페롤 스프리츠(Aperol spritz)</p>
        </Styled.FontWraper>
        <Styled.FontWraper2>
          <p> 😃 도수 : 16</p>
        </Styled.FontWraper2>

        {/* 준비물과 레시피 및 후기 등록 */}
        <div>
          <Styled.FontWraper2>
            <p>준비물</p>
          </Styled.FontWraper2>
          <Styled.FontWraper2>
            <p> 레시피</p>
          </Styled.FontWraper2>

          <Styled.Box>
            잔에 얼음을 채운다.
            <br /> 잔에 오렌지 슬라이스를 제외한 나머지 재료를 넣는다.
            <br /> 바 스푼으로 젓는다.
            <br />
            오렌지 슬라이스를 넣는다.
          </Styled.Box>
          <Styled.FontWraper2>
            <p>후기</p>
          </Styled.FontWraper2>

          <Styled.Box>매우 맛있습니다!</Styled.Box>
        </div>
        <Styled.StyledButton>후기 등록</Styled.StyledButton>

        {/* 준비물과 레시피 및 후기 등록 */}
      </TodoTemplate>
    </div>
  );
}

export default Explain;
