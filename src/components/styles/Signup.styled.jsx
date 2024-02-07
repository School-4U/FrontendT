import styled from "styled-components";
import { Field } from "formik";
import { Link } from "react-router-dom";

export const SignUp = styled.div`
  width: 100%;
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
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 16px;
  background: #f5f6f899;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  h3 {
    margin: 0;
    font-size: 2rem;
    font-family: "inter", sans-serif;
    font-weight: 700;
    margin-bottom: 4%;
  }

  p {
    font-size: 1.1rem;
    font-family: "inter", sans-serif;
    font-weight: 400;
    padding: 10px 0;
  }
`;
export const Formgroup = styled.div`
  margin-bottom: 1.1rem;
`;

export const StyledField = styled(Field)`
  display: flex;
  justify-content: center;
  width: 100%; 
  height: 3rem;
  padding: 1.8rem 1.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #6e7fd7;
  outline: none;
  font-size: 1rem;
  align-items: center;
  border-radius: 1.2rem;
  gap: 24px;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

`;
export const FormButton = styled.button`
  display: flex;
  width: 65%;
  height: 3.5rem;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 25px;
  font-size: 1.2rem;
  background: linear-gradient(0deg, #6e7fd7 0%, #6e7fd7 100%), #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
  outline: none;
  border: none;
  font-weight: bold;
  margin-inline: auto;
`;

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
`;

export const ButtonLink = styled(Link)`
  color: orange;
`;

export const StyledP = styled.p`
  font-size: 16px;
  margin-top: 11px;
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  text-align: center;
`;

export const Lines = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 0 5px;
  }
`;

export const StyledSignInButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;