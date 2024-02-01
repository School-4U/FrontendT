import styled from "styled-components"

export const StyledHome = styled.div`

` 

export const Right = styled.div`
display: flex;
flex-direction: column;
padding: 0 20px
   
`

export const Middle = styled.div`
flex: 1;
border-right: 2px solid #6E7FD7;
margin-top: 120px;
text-align: center;
padding: 70px


`
export const Left = styled.div`
padding: 0 20px;
`

export const Right2 = styled.div`
flex: 1;
border-right: 2px solid #6E7FD7;
text-align: center;
margin-top: 120px;
padding: 70px
`

export const Left2 = styled.div`
flex: 1;
text-align: center;
margin-top: 120px;
padding: 70px

`
export const WhyContainer = styled.div`
font-size: 52px;
text-align:  center;
margin-top: 90px;
font-family: 'inter',serif;
font-weight: 700

`
export const SubHeading = styled.div`
text-align: center;
margin-top: 20px;
font-family: 'inter',serif;
font-weight: 400;
`
export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
margin-top: 90px;


`
export const WhatContainer = styled.div`
background: #6E7FD7;
margin-top: 90px;
padding-top: 50px;

P{
    color: white;
    font-size: 62px;
    text-align:  center;
    margin-top: 30px;
    font-family: 'inter',serif;
    font-weight: 700

}

h3{
    color: white;
    text-align: center;
    margin-top: 50px;
    font-size: 28px;
}



`
export const Comments = styled.div`
display: flex;
padding: 40px;
font-size: 26px;
margin: 20px;
border: 1px solid #ccc;
background:  white;
color: black;
border-radius: 16px;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

`

export const Comments2 = styled.div`
display: flex;
padding: 40px;
font-size: 26px;
margin-top: 190px;
border: 1px solid #ccc;
background: #7685f6;
color: white;
border-radius: 16px;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

`
export const CommentImage = styled.img`
  width: 50px;
  height: 50px; 
  object-fit: cover;
`;