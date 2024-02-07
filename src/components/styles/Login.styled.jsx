import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  flex-shrink: 0;
  display: flex;
  padding: 2rem;
  background: #fff;
  background-image: linear-gradient(
      115deg,
      rgba(241, 241, 241, 0.1),
      rgba(250, 250, 250, 0.1)
    ),
    url("../../../assets/login/login-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 

   @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 1rem;        
    background: #fff;
    background-image: none;
  }
`;

export const LoginLeft = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15%;
  padding-left: 10%;
  width: 70%;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }


  & div {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    background-color: rgba(255, 255, 255, 0.2);
    /* background-image: url("../../../../assets/login/Highlight.png"); */
    /* background-image: rgba(255, 255, 255, 0.2); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 10rem;
    padding: 0.5rem;

    & h1 {
      margin-inline: 0;
      margin-bottom: 1rem;
      /* text-shadow: 0 6px 6px 10px; */
    }
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
  margin-top: -8rem;
  /* margin-inline: 10%; */

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginRight = styled.div`
  border-radius: 16px;
  background: rgba(245, 246, 248, 0.3);
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.3);
  width: 40%;
  padding: 5rem 3%;
  margin-inline: 10%;
  margin-top: 5%;

  @media (max-width: 768px) {
    width: 100%;
    margin-inline: 1rem;
    padding: 3rem 3%;
  }

  & h2 {
    font-family: "Inter", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 4%;
  }
`;