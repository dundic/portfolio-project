import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};
        cursor: pointer;
    }

    ul, ol {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font};
    }

    section {
        padding: 100px 0;
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }
    
    h3 {
        font: 700 16px "Josefin Sans", sans-serif;
        letter-spacing: 0.06em;
    }
    
    p {
        font: 400 14px "Poppins", sans-serif;
        line-height: 1.4;
    }

`