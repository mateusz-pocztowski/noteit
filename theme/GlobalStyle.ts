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
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.6rem;
    line-height: normal;
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
  .Toastify__toast {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.hover200};
    box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1);
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
  .Toastify__close-button {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }
  .toast-progress {
    background: ${({ theme }) => theme.gradients.bluePurple};
    height: 3px;
  }
  #nprogress .bar {
    background: ${({ theme }) => theme.colors.blue};
    height: 3px;
  }
`

export default GlobalStyle
