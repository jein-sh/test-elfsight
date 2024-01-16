import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", "Arial", sans-serif;
    min-height: 100vh;
  }

  html {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #050510;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }

  header {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Inter";
    font-display: swap;
    src: url("../fonts/Inter-Regular.woff2") format("woff2"), url("../fonts/Inter-Regular.woff") format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 500;
    font-family: "Inter";
    font-display: swap;
    src: url("../fonts/Inter-Medium.woff2") format("woff2"), url("../fonts/Inter-Medium.woff") format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 700;
    font-family: "Inter";
    font-display: swap;
    src: url("../fonts/Inter-Bold.woff2") format("woff2"), url("../fonts/Inter-Bold.woff") format("woff");
  }

`