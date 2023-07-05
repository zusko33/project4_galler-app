import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
  margin: 0;
  font-family: system-ui;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  text-align: center;
  }

  header {
    font-size: 2rem;
  }

  ul {
 list-style: none;
 padding: 0;
 margin: 0;
  }
`;
