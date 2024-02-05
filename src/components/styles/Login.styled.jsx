import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  padding: 2rem;
`;

export const LoginLeft = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15%;
  padding-left: 10%;
  width: 70%;
  text-align: center;


  & div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-image: url("../../../../assets/login/Highlight.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
  }
`;

export const LoginWelcome = styled.h4`
  color: #000;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: -8%;
  margin-inline: 10%;
`;

export const LoginRight = styled.div`
  border-radius: 16px;
  background: rgba(245, 246, 248, 0.6);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  width: 40%;
  padding: 5rem 3%;
  margin-inline: 10%;
  margin-top: 5%;

  & h2 {
    font-family: "Inter", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 3%;
  }
`;