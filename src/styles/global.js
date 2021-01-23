import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0%;
  }

  body {
    background-color: ${theme.common.colors.light};
    -webkit-font-smoothing: antialised;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body,
  input,
  button {
    font-family: ${theme.common.font.family};
    font-size: ${theme.common.font.sizes.medium};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: ${theme.common.font.medium};
  }

  button {
    cursor: pointer;
  }
`}
`;
