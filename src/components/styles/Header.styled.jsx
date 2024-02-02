import styled from "styled-components";

export const StyledHeader = styled.header `
    padding: 20px;
    margin: 20px auto 0;
    // position: sticky;
    // top: 0;

`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`
export const Linkul = styled.ul`
display: flex;
align-items: center;
width: 600px;
gap: 50px;


`
export const Logo = styled.img`
width: 145px;
height: 32px;
margin-left: 20px;

`
export const StyledButtons = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 10px;
gap: 50px;
font-family: 'Inter Tight', sans-serif;
font-weight: 400;


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

`
export const SignB = styled.button`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: #6E7FD7;
    padding: 10px 20px;
    color: white;
`
export const MobileScreen = styled.div`
display: none;
position: absolute;
top: 3.5rem;
right: 2.75rem;
flex-direction: column;
justify-content: space-between;
width: 2.25rem;
height: 2rem;
background-color: #fff; /* Add a background color temporarily */
//   z-index: 999;

span{
    height: 0.5rem;
    width: 100%;
    background: green;
    border-radius: 2rem;
    margin-bottom: 0.3rem;

}

@media screen and (max-width: 765px){
display: flex;

}

`


   

