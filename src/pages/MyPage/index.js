import React from 'react'
import * as Styled from "./styled";
import ColorSchemesExample from "../../components/Nav";
import TodoTemplate from "../../components/Templete";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import Form from 'react-bootstrap/Form';



//닉네임
//자기소개
//수정모달창
const MyPage = () => {
  const Correction=()=>{
    
  }
  return (
    <div>
        <div>내 정보</div>
        <TodoTemplate>
          <ColorSchemesExample></ColorSchemesExample>
        </TodoTemplate>

        <Styled.Box>
          <div className='pen' onClick={Correction}>
          <FontAwesomeIcon icon={faPen}/>
          </div>
          <div>
        <>
      <Form.Label htmlFor="nickname">닉네임</Form.Label>
      <Form.Control
        type="nickname"
        id="nickname"
        aria-describedby="nickname"
      />
      <Form.Text id="nickname" muted>
      </Form.Text>
    </>
        </div>
        <div>
        <>
      <Form.Label htmlFor="intro">소개</Form.Label>
      <Form.Control
        type="intro"
        id="intro"
        aria-describedby="intro"
      />
      <Form.Text id="intro" muted>
      </Form.Text>
    </>
        </div>
        </Styled.Box>
       
    </div>
  )
}

export default MyPage