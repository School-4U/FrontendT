import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
margin: 20px;
border: 1px solid #ccc;
border-radius: 10px;
background: #F5F6F899;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

h4{
    font-family: 'Inter Tight', sans-serif;
    font-weight: 700;
    text-align: center;
  
}

p{
    margin-top: 40px;
    text-align: center;
}

img{
    width: 68px;
    height: 69px;
    margin: auto;
    padding-bottom: 20px
}
`