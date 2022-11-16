import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/Home">홈</Nav.Link>
            <Nav.Link href="/Rank">랭킹</Nav.Link>
            <Nav.Link href="/Signin">회원가입</Nav.Link>
            <Nav.Link href="/Login">로그인</Nav.Link>
            <Nav.Link href="/">explain</Nav.Link>
            <Nav.Link href="/">내 정보</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
