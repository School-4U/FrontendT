import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

body{
    font-family: 'inter', sans-serif;
}

img{
    max-width: 100%
}

ul li{
    list-style-type: none
}

a{
    text-decoration: none
}

span{
    color: orange
}

h1{
    padding-bottom: 20px;
    font-family: 'inter', serif;
    font-weight: 900;
    font-size: 46px
}

h2{
    color: #6E7FD7;
    font-size: 48px;
}

p{
    font-family: 'inter', serif;
    font-weight: 400;
}

`
export default GlobalStyles