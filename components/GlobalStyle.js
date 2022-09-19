import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,*::after, *::before {
    box-sizing:border-box;
}
body {
    margin: 100px;
    padding: 10px;
}
`;
