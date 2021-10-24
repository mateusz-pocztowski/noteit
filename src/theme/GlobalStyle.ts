import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'nprogress/nprogress.css'
import 'simplebar/src/simplebar.css'
import 'react-toastify/dist/ReactToastify.css'

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

  .Toastify__toast {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.element100};
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
  .toast-success .toast-progress {
    background: ${({ theme }) => theme.gradients.green};
  }
  .toast-error .toast-progress {
    background: ${({ theme }) => theme.gradients.red};
  }

  @keyframes slide-in-fwd {
    0% {
      transform: translateY(-200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  .slide-in-fwd {
    animation: slide-in-fwd 0.35s cubic-bezier(0.075, 0.82, 0.165, 1) both;
  }

  @keyframes slide-out-bck {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-200px);
      opacity: 0;
    }
  }

  .slide-out-bck {
    animation: slide-out-bck 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) both;
  }

  #nprogress .bar {
    background: ${({ theme }) => theme.colors.blue};
    height: 3px;
  }
  #nprogress .spinner-icon {
    border-top-color: ${({ theme }) => theme.colors.blue};
    border-left-color: ${({ theme }) => theme.colors.blue};
  }
`

export default GlobalStyle
