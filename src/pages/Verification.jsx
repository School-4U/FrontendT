import React from "react";
import styled from "styled-components";
import EmailVerification from "./EmailVerification";
import SVGLogo from "../../public/assets/SVGLogo";

const Container = styled.div`
  width: 100%;
  background-color: #fafafa;
`;

const VerificationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Verification = () => {
  return (
    <Container>
      <SVGLogo />
      <VerificationContainer>
        <EmailVerification />
      </VerificationContainer>
    </Container>
  );
};
