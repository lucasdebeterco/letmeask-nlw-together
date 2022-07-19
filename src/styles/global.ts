import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #f8f8f8;
        color: #29292e;
    }
    
    body, input, textarea, button {
        font: 400 16px 'Roboto', sans-serif;
    }
`