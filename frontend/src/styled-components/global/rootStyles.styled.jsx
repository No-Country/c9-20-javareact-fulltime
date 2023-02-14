import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background-primary: rgba(0, 0, 0, 1);
        --background-secondary: rgba(45, 45, 45, 1);
        --text-primary: rgba(255, 255, 255, 1);
        --text-secondary: rgba(172, 172, 172, 1);
        --button-primary: rgba(255, 168, 0, 1);
        --button-secondary: rgba(255, 196, 81, 1);
        --second: rgba(252, 219, 155, 1);
        --font-family:  'Poppins', sans-serif;
    }

    html{
        box-sizing: border-box;
    }

    * , ::after, ::before{
        box-sizing: inherit;
    }

    body{
        margin: 0;
        font-family: var(--font-family);
    }

    button{
        background: none;
        border: none;
    }

    ul,li{
        list-type: none;
        padding: 0;
    }
    img{
        max-width: 100%;
        inline-size: auto;
    }
`;
