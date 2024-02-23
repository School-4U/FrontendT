
import styled from "styled-components";
import SchoolEmailVerification from "./SchoolEmailVerification";

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

export const SchoolVerification = () => {
  return (
    <Container>
      <VerificationContainer>
        <SchoolEmailVerification />
      </VerificationContainer>
    </Container>
  );
};
