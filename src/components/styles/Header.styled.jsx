import styled from "styled-components";
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const StyledHeader = styled.header `
    padding: 20px;
    margin: 20px auto 0;

`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) and (max-width: 1200px){
        flex-direction: column;
    }
   
`
export const Linkul = styled.ul`
position: relative;
display: flex;
align-items: center;
width: 600px;
gap: 50px;

li{
    margin: 1.5rem auto;
    text-align: center;
}

@media screen and (min-width: 768px) and  (max-width: 1200px){
    display: ${(props) => (props.active ? "block" : "none")};
    background: orange;
    margin-top: 30px;
    z-index: 100;
}


`
export const Logo = styled.img`
width: auto;
height: 2.5rem;
margin-left: 20px;
align-self: start;

`
export const StyledButtons = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 10px;
gap: 50px;
font-family: 'Inter Tight', sans-serif;
font-weight: 400;

@media screen and (min-width: 768px) and (max-width: 1200px){
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
}





`
export const Button = styled.button`
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    background: white;
    padding: 10px 20px;
    

&:hover{
    background:  #6E7FD7;
    color: white; 
}

@media screen and (min-width: 768px) and (max-width: 1200px){
    width: 90px;
    margin: auto;
}


`
export const SignB = styled.button`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: #6E7FD7;
    padding: 10px 20px;
    color: white;

`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
display: none;
position: absolute;
right: 50px;
top: 55px;
color: orange;
font-size: 1.8rem;
cursor: pointer;
@media screen and (min-width: 768px) and (max-width: 1200px){
    display: block;


}

`



   

