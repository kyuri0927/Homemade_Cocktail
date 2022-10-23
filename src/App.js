import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/Templete";
import Rating from "./components/Star";
import ColorSchemesExample from "./components/Nav/index";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Explain from "./pages/Explain";
import Rank from "./pages/Rank";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      {/* <ColorSchemesExample></ColorSchemesExample> */}

      <BrowserRouter>
        <GlobalStyle />
        <TodoTemplate>
          <Routes>
            <Route path="/" element={<Explain />}></Route>
            <Route path="/Rank" element={<Rank />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
        </TodoTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
