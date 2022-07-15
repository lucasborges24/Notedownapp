import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyleLight = createGlobalStyle`
${reset}
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #ffffff;
        font-family: 'Finlandica', sans-serif;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;

const GlobalStyleDark = createGlobalStyle`
${reset}
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #c6c6c6;
        font-family: 'Finlandica', sans-serif;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export { GlobalStyleLight, GlobalStyleDark };
