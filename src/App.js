import logo from "./logo.svg";
import "./App.css";

import { createGlobalStyle } from "styled-components";
import Templete from "./components/Templete";
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Templete>
        Logo
        <div>
          <input></input>
          <button>🔍</button>
        </div>
      </Templete>
      <div></div>
    </div>
  );
}

export default App;
