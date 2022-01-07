import { createGlobalStyle, DefaultTheme, MyTheme } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Libre+Franklin:wght@300;400;500;700&family=Nunito+Sans:wght@300;400;600;700&family=Poppins:wght@400;500;700&family=Roboto+Mono&family=Source+Sans+Pro:wght@300;400&family=Ubuntu:wght@400;500;700&display=swap');

* {
   padding: 0;
   margin: 0;
   border: 0;
}
*,
*:before,
*:after {
   -moz-box-sizing: border-box;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
}
:focus,
:active {
   outline: none;
}
a:focus,
a:active {
   outline: none;
}

nav,
footer,
header,
aside {
   display: block;
}

html,
body {
   height: 100%;
   width: 100%;
}
input,
button,
textarea {
   font-family: inherit;
}

input::-ms-clear {
   display: none;
}
button {
   cursor: pointer;
   font-size: 100%;
}
button::-moz-focus-inner {
   padding: 0;
   border: 0;
}
a,
a:visited {
   text-decoration: none;
}
a:hover {
   text-decoration: none;
}
ul li {
   list-style: none;
}
img {
   max-width:100%;
   display: block;
}

html {
   font-size: 62.5%;
}

body {
   font-size: 100%;
   line-height: 1;
   font-family: 'Poppins', "Roboto",sans-serif;
   background: #fff;
   min-height: 100vh;
   width: 100%;
   color: ${({ theme }) => theme.font.main};
}

h1,
h2,
h3,
h4,
h5,
h6 {
   font-size: inherit;
   font-weight: 400;
}

#root {
   position: relative;  
   min-height: 100vh;
   overflow-x: hidden;
   display: flex;
   flex-direction: column;
}
`;