import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;}

  :focus {
    outline: 0;
  }

  body {
    font-family: 'Inter', sans-serif !important;

    background: ${(props) => props.theme["black-500"]};
    color: ${(props) => props.theme["white"]};
    -webkit-font-smoothing: antialiased;
  }

  input, button, a, textarea {
    font-family: 'Inter', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 1.875rem;
  }

  d-flex{
    display: flex;
    width: 100%;
  }
`;
