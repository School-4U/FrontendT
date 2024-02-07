import React from "react";
import styled from "styled-components";
import EmailVerification from "./EmailVerification";

const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

const VerificationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Verification = () => {
  return (
    <Container>
      <VerificationContainer>
        <EmailVerification />
      </VerificationContainer>
    </Container>
  );
};
