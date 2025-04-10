import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
    color: ${(props) => props.theme["base-title"]};
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
  }
`;
