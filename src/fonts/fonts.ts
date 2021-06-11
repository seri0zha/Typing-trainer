import { createGlobalStyle } from "styled-components";

import NotoSerifRegular from "./NotoSerifRegular.woff2";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Noto Serif";
    url(${NotoSerifRegular}) format('woff2');
  }
  `;

export default GlobalFonts;
