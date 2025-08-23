import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-primary: 'Rubik', sans-serif;

        /* Whites */
        --color-white-1: #FFFFFF;   /* branco puro */
        --color-white-2: #FAFAFA;   /* branco médio */
        --color-white-3: #F5F5F5;   /* branco escuro */

        /* Grays */
        --color-gray-1: #D9D9D9;    /* cinza claro */
        --color-gray-2: #777777;    /* cinza médio */
        --color-gray-3: #4B4B4B;    /* cinza escuro */

        /* Blacks */
        --color-black-1: #2E2E2E;   /* preto claro */
        --color-black-2: #1C1C1C;   /* preto médio */
        --color-black-3: #000000;   /* preto puro */

        /* Blues */
        --color-blue-1: #A3B8D3;    /* azul claro */
        --color-blue-2: #2F4F8F;    /* azul médio */
        --color-blue-3: #142B3B;    /* azul escuro */

        /* Whatsapp */
        --color-whatsapp-2: #25d366;
        --color-whatsapp-1: #4ad67dff;
    }
`;
