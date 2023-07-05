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
    text-align: center;
  display: grid;
  /* min-height: 100vh; */
  grid-template-rows: auto 1fr auto;
  max-width: 400px;
  gap: 32px;
  background-color: darkgray;
  border-radius: 40px;
  }

  div {
    width: 100%;
  padding: 0 25px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  }
`;
