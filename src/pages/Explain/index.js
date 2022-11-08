import React from "react";
import * as Styled from "./styled";
import ColorSchemesExample from "../../components/Nav";
import Rating from "../../components/Star";
import TodoTemplate from "../../components/Templete";
import { Modal } from "../../features/Modal";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import img_array from "../../components/Data";
import { useParams } from "react-router-dom";

function Explain(props) {
  const [signup, setSignup] = useState(false);
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <TodoTemplate>
        <ColorSchemesExample></ColorSchemesExample>
        <BackButton></BackButton>
        {/* 사진  */}
        <div className="Card1">
          <div className="c1image">
            <img
              className="phoneImage"
              alt="iPhone_01"
              src={img_array[id].image}
            />
          </div>
        </div>
        {/* 사진 */}

        {/* 별점 컴포넌트 */}
        <Rating></Rating>
        {/* 별점 컴포넌트 */}
        <Styled.RatingText>선호도를 입력해주세요.</Styled.RatingText>
        <Styled.FontWraper>
          <p> {img_array[id].name}</p>
        </Styled.FontWraper>
        <Styled.FontWraper2>
          <p> 😃 도수 : {img_array[id].alchol}</p>
        </Styled.FontWraper2>

        {/* 준비물과 레시피 및 후기 등록 */}
        <div>
          <Styled.FontWraper2>재료</Styled.FontWraper2>
          <Styled.ingredient>{img_array[id].ingredient}</Styled.ingredient>

          <Styled.FontWraper2>
            <p>레시피</p>
          </Styled.FontWraper2>
          <Styled.Box>{img_array[id].recipe}</Styled.Box>
          <Styled.FontWraper2>
            <p>후기</p>
          </Styled.FontWraper2>
          <Styled.Box></Styled.Box>
        </div>

        {/* 후기 등록  */}

        <div className="Main">
          {/* // 후기등록 버튼을 누르면 후기등록 modal이 생성된다 */}
          <input
            type="button"
            value="후기등록"
            className="blueBtn"
            onClick={() => setSignup(!signup)}
          />
          {signup && (
            <Modal closeModal={() => setSignup(!signup)}>
              {/* <Signup /> */}
            </Modal>
          )}
        </div>

        {/* 준비물과 레시피 및 후기 등록 */}
      </TodoTemplate>
    </div>
  );
}

export default Explain;
