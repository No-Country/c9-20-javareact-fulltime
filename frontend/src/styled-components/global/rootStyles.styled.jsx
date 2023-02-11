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
    }

    button{
        background: none;
        border: none;
    }

    ul{
        list-type: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
