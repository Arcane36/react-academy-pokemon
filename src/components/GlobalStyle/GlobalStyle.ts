import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0 auto;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        font-family: "opensans",Arial,Helvetica,sans-serif;
        max-width: 1440px;
        padding: 16px;
        background-color: aliceblue;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        border: none;
        vertical-align: middle;
        image-rendering: auto;
    }
`;
