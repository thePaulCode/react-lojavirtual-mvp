import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "gilroy-bold";
        src: url("https://onp.nyc3.digitaloceanspaces.com/Gilroy-Bold.ttf");
    }

    @font-face {
        font-family: "gilroy-regular";
        src: url("https://onp.nyc3.digitaloceanspaces.com/Gilroy-Regular.ttf");
    }

    @font-face {
        font-family: "gilroy-light";
        src: url("https://onp.nyc3.digitaloceanspaces.com/Gilroy-Light.ttf");
    }

    @font-face {
        font-family: "gilroy-medium";
        src: url("https://onp.nyc3.digitaloceanspaces.com/Gilroy-Medium.ttf");
    }

    @font-face {
        font-family: "gilroy-heavy";
        src: url("https://onp.nyc3.digitaloceanspaces.com/Gilroy-Heavy.ttf");
    }

`;

export default GlobalStyle;