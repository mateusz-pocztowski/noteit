import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'nprogress/nprogress.css'
import 'simplebar/src/simplebar.css'
import 'react-toastify/dist/ReactToastify.css'
// import 'components/Editor/editorStyles.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *, *::before, *::after {
    box-sizing: border-box;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    outline: 0 !important;
  }

  input, textarea {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    resize: none;
  }

  button, button:focus, input:focus, textarea:focus, select:focus {
    outline: 0 !important;
  }
  
  sup {
    font-size: 60%;
    vertical-align: super;
  }

  b {
    font-weight: 700
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: "color 9999s ease-out,  background-color 9999s ease-out";
      transition-delay: 9999s;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.backgroundGradient};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.6rem;
    line-height: normal;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 150ms ease;
  }

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colors.blue300};
    opacity: 1 !important;
  }
  .simplebar-track {
    background-color: ${({ theme }) => theme.colors.hover100} !important;
    border-radius: 12px;
  }
  .simplebar-content {
    height: 100%;
  }
  #nprogress .bar {
    background: ${({ theme }) => theme.colors.blue};
    height: 3px;
  }
`

export default GlobalStyle
