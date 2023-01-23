import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.background};
    color: ${theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  body,
  input,
  textarea,
  button {
    ${({ theme }) => css`
      font-family: 'Roboto', sans-serif;
      font-size: ${theme.md};
      font-weight: ${theme['font-regular']};
    `}
  }
`}
`
