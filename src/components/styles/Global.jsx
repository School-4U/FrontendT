import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

body {
    font-family: 'inter', sans-serif;

}

img {
    max-width: 100%;
}

ul li {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: inherit;
    text-decoration: inherit;
}

span {
    color: orange;
}

h1 {
    padding-bottom: 1.25rem;
    font-family: 'inter', serif;
    font-weight: 900;
    font-size: 3rem;
    @media screen and (min-width: 768px) and (max-width: 1200px){
        padding-bottom: 1rem;
        font-size: 2rem;
      }
      
      @media screen and (min-width: 320px) and (max-width: 768px){
        padding-bottom: 0.8rem;
        font-size: 1.4rem;
      
      }
}

h2 {
    color: #6E7FD7;
    font-size: 2.5rem;
}

p{
    font-family: 'Inter Tight', sans-serif;
    font-weight: 400;
}
`;
export default GlobalStyles;
