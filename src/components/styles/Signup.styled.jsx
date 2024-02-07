import styled from "styled-components";
import { Field } from 'formik'
import { Link } from "react-router-dom";


export const  SignUp = styled.div`
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 64px 0 73px;
    display: flex;
    justify-content: space-between;
    background-color: blue;

`;

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 646px;
  margin: 0 auto;
  padding: 18px 26px 59px;
  border: 1px solid #ccc;
  border-radius: 16px;
  background: #F5F6F899;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  h3{
    margin: 0;
    font-size: 32px;
    font-family: 'inter', sans-serif;
    font-weight: 700;

  }

  p{
    font-size: 18px;
    font-family: 'inter', sans-serif;
    font-weight: 400;
    padding: 10px 0;
    
  }
`
export const Formgroup = styled.div`
margin-bottom: 18px;

`

export const StyledField = styled(Field)`
width: 100%;
Padding: 10px 20px;
border: 1px solid black;
border-radius: 25px;

`
export const FormButton = styled.button`
background: #6E7FD7;
display: inline-block;
padding: 10px 20px;
margin: 0 auto;
border-radius: 25px;
border: none;
width: 80%;
color: white;
font-family: 'inter', sans-serif;
font-weight: 600;
cursor: pointer;
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #2f2f2f;

  & span {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const ButtonLink = styled(Link)`
color: orange
`
export const StyledP = styled.p`
  font-size: 16px; 
  margin-top: 11px; 
  font-family: 'Inter Tight', sans-serif;
  font-weight: 400;
  text-align: center;
`;

export const Lines = styled.div`
display: flex;
align-items: center;

p{
  padding: 0 5px;
}

`

export const StyledSignInButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

