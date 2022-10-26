import React from "react";
import * as Styled from "./styled";

//  참고 https://joylee-developer.tistory.com/184

function Modal(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <>
      <Styled.modal>
        <div
          className="Modal" /*onClick={closeModal} 아무 화면 누르면 닫히는 */
        >
          <Styled.modalBody>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
              <Styled.modalclose>
                <button id="modalCloseBtn" onClick={closeModal}>
                  ✖
                </button>
                {props.children}
              </Styled.modalclose>
              {/* 후기 입력란 */}
              <Styled.Wraper>
                <p>후기 입력</p>
              </Styled.Wraper>
              <Styled.review placeholder="후기를 입력해 주세요"></Styled.review>
              <button>후기 등록</button>
            </div>
          </Styled.modalBody>
        </div>
      </Styled.modal>
    </>
  );
}

export { Modal };
