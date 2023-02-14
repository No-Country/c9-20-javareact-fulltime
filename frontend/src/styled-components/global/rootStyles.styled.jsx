import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html{
        box-sizing: border-box;
    }

    * , ::after, ::before{
        box-sizing: inherit;
    }

    body{
        margin: 0;
        font-family: "Poppins", sans-serif;
        line-height: 1.4;
        background-color: #000;
    }

    button{
        background: none;
        border: none;
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
