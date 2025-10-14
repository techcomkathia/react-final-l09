import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.texto};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.cores.link};
  }

  a:hover {
    text-decoration: underline;
  }
`;
