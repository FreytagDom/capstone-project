import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,*::after, *::before {
    box-sizing:border-box;
}
body {
    margin: 0;
    padding: 0;
    @media only screen and (min-device-width: 480px){
    gap: 4rem;
    
}
@media (max-width: 600px) {
    .grid {
       width: 100%;
       flex-direction: column;
    }}}
`;
