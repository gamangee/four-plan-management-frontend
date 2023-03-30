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

.react-datepicker{
  border:none
}

.react-datepicker__month-container{
  width: 450px;
  height: 450px;
  border: 5px solid #E9F2FF;
  border-radius: 16px;
}

.react-datepicker__current-month{
  color: ${props => props.theme.style.text};
  font-size: 28px;
  margin: 20px 0;
}

.react-datepicker__day--outside-month{
  opacity: 0.2;
}

.react-datepicker__header {
  background-color: transparent;
  border-bottom: 0;
}

.react-datepicker__day-name{
  color: ${props => props.theme.style.white};
  background-color: #3d3d3d;
  font-size: 20px;
  margin: 9px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}

.react-datepicker__day-name:first-child{
  background-color: ${props => props.theme.style.warning};
}

.react-datepicker__day-name:last-child{
  background-color: ${props => props.theme.style.text};
}

.react-datepicker__month{
  font-size: 26px;
}

.react-datepicker__week{
  margin: 0 15px;
}

.react-datepicker__day   {
  width: 52px;
  line-height: 42px;
  border-radius: 20px;
  transition: all .3s ease;
}

.react-datepicker__day:hover{
  color: ${props => props.theme.style.white};
  border-radius: 30px;
  background-color: #D20811;
}

.react-datepicker__day--today.react-datepicker__day--weekend:first-child{
  border: 1px solid ${props => props.theme.style.warning};
}

.react-datepicker__day--today.react-datepicker__day--weekend:last-child{
  border: 1px solid ${props => props.theme.style.text};
}

.react-datepicker__navigation-icon{
  top:10px;
}

.react-datepicker__navigation-icon--previous{
  right:-10px;
}

.react-datepicker__navigation-icon--next{
  left:-10px;
}

.react-datepicker__day--weekend{
  color: ${props => props.theme.style.lightGray};
  opacity: 0.5;
}

.react-datepicker__day--weekend:first-child{
  color: ${props => props.theme.style.warning};
}

.react-datepicker__day--weekend:last-child{
  color: ${props => props.theme.style.text};
} 

.react-datepicker__day--in-range,
.react-datepicker__day--selected,
.react-datepicker__day--in-selecting-range,
.react-datepicker__day--selecting-range-start,
.react-datepicker__day--range-start,
.react-datepicker__day--range-end{
  background-color: #ff4c54;
  color: ${props => props.theme.style.white};

  .react-datepicker__day--weekend{
    color: ${props => props.theme.style.white};    
  }
}

.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range){
  color: ${props => props.theme.style.white};    
  background-color: #ff4c54;
  opacity: 0.5;
}

.react-datepicker__day--selected.react-datepicker__day--weekend{
  color: ${props => props.theme.style.white};    

}

.react-datepicker__day--in-range.react-datepicker__day--weekend{
  color: ${props => props.theme.style.white};    

}


`;

export default GlobalStyle;
