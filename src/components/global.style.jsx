import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root, body {
    font-family: Raleway;
    color: #000;
    background-color: #fff;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  p, a, li, th, td {
    text-decoration: none;
    margin: 0;
    font-size: 14px;
  }
  button {
    font-family: Raleway;
  }
`;

export default GlobalStyle;
