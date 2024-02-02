import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

const Head = styled.div`

  & h2 {
    font-size: 2rem;
  }
`;

const VerificationDigits = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;

  & input {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 1rem;
    text-align: center;
    outline: none;
    border: 2px solid #6e7fd7;
  }
`;

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleInputChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0) {
      // Move focus to the previous input box on Backspace
      document.getElementById(`input-${index - 1}`).focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      // Move focus to the previous input box on ArrowLeft
      document.getElementById(`input-${index - 1}`).focus();
    } else if (e.key === "ArrowRight" && index < verificationCode.length - 1) {
      // Move focus to the next input box on ArrowRight
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const code = verificationCode.join("");
    // Authentication logic here
    console.log("Verification Code:", code);
  };

  return (
    <Container>
      <Head>
        <h2>Email Verification</h2>
        <h4>Enter Code</h4>
        <p>
          Enter 6-digit code sent to <span></span>
        </p>
      </Head>
      <VerificationDigits>
        {verificationCode.map((digit, index) => (
          <input
            key={index}
            type="text"
            id={`input-${index}`}
            maxLength="1"
            value={digit}
            placeholder="_"
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </VerificationDigits>
      <button onClick={handleSubmit}>Verify</button>
      <p>Didn't receive a code? </p>
    </Container>
  );
};

export default EmailVerification;
