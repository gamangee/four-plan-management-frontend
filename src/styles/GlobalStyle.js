import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
font-family: 'Noto Sans KR', sans-serif;
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a{
    color:inherit;
    text-decoration:none;
    -webkit-transition: all 0.2s ease-in-out;
       -moz-transition: all 0.2s ease-in-out;
        -ms-transition: all 0.2s ease-in-out;
         -o-transition: all 0.2s ease-in-out;
            transition: all 0.2s ease-in-out;
}
a:hover,
a:active{
    text-decoration:underline;
    -webkit-transition: all 0.2s ease-in-out;
       -moz-transition: all 0.2s ease-in-out;
        -ms-transition: all 0.2s ease-in-out;
         -o-transition: all 0.2s ease-in-out;
            transition: all 0.2s ease-in-out;
}
input[type='radio'], input[type='checkbox'] {vertical-align:middle !important; margin:-.2em 3px 0 0 !important;}
input,select {vertical-align:middle; background:#fff;}
input,textarea,button{-webkit-appearance:none;--webkit-border-radius:0}
input[type='checkbox']{-webkit-appearance:checkbox}
input[type='radio']{-webkit-appearance:radio}
button{cursor:pointer}
`;

export default GlobalStyle;
