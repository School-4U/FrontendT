import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../components/styles/Header.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StyledDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    gap: 10px;
    margin-top: 50px;
    flex-direction: column;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }

  @media screen and (max-width: 319px) {
    width: 310px;
    padding: 10px;
    flex-direction: column;
  }
`;

const StyledDivLogo = styled.div`
  width: 100%;
  padding: 20px;
  margin-left: 70px;
  max-width: 600px;

  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  text-align: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-left: 10px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const StyledDivForgotPassword = styled.div`
  min-width: 550px;
  max-width: 650px;
  padding: 40px;
  margin-right: 70px;
  border-radius: 16px;
  background-color: rgba(245, 246, 248, 0.6);

  // height: auto;
  min-height: 800px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;

  h3 {
    font-size: 32px;
    font-weight: bold;
    line-height: 32px;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 24px;
    font-weight: normal;
  }

  h5 {
    font-size: 16px;
    font-weight: normal;
    text-align: center;
  }

  h6 {
    font-size: 16px;
    font-weight: normal;
  }

  button {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 350px;

    display: flex;
    align-self: center;
    text-align: center;
    justify-content: center;

    color: white;
    font-size: 24px;
    font-weight: semi-bold;
    border-radius: 25px;
    border: 1px solid rgba(110, 127, 215, 1);
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(110, 127, 215, 1);
  }

  input {
    margin-top: 5px;
    margin-bottom: 15px;

    padding-left: 20px;
    padding-top: 16px;
    padding-bottom: 16px;

    width: 100%;
    font-size: 16px;
    border-radius: 25px;
    border: 1px solid rgba(110, 127, 215, 1);
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-right: 20px;
    flex-direction: column;
    min-width: 550px;
    max-width: 650px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-right: 0px;
    min-width: 300px;
    max-width: 450px;
    padding: 30px;
  }

  @media screen and (max-width: 319px) {
    min-width: 300px;
    padding: 10px;
    padding: 10px;
  }
`;

const StyledDivText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const StyledDivInput = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;

  margin-top: 10px;
`;

const StyledDivLogin = styled.div`
  margin-top: 10px;

  width: 100%;
  flex-direction: row;
  gap: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const notifyError = () => toast("Oops, an error occured!");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-production-b20a.up.railway.app/users/changePassword",
        { email }
      );

      console.log(response, "axios response");

      navigate("/login");
    } catch (error) {
      notifyError();
    }
  };

  return (
    <StyledDiv>
      <StyledDivLogo>
        <Logo src="assets/logo.png" alt="Logo for School 4u" />
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </h5>
      </StyledDivLogo>

      <StyledDivForgotPassword>
        <StyledDivText>
          <h3>Forgot Password?</h3>
          <h5>Enter your account email</h5>
          <h5>we’ll send you a reset link right away</h5>
        </StyledDivText>

        <StyledDivInput>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </StyledDivInput>

        <button onClick={handleSubmit}>Get Link</button>

        <StyledDivLogin>
          <h6>
            Return to <span>Login</span>
          </h6>
        </StyledDivLogin>
      </StyledDivForgotPassword>
    </StyledDiv>
  );
};

export default ForgotPassword;
