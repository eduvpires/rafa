import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    
    body {
        font-family: var(--font-primary);
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol {
        list-style: none;
    }

    input, textarea {
        border-radius: 0;
        border: none;
        background: transparent;
    }
`;
